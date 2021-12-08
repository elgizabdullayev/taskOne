import React, { FC, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { WebSocketClient } from '../../api/webSocket/webSocket';
import { ICurrencyItem } from '../../entities/ICurrencyItem';
import { INavigation } from '../../entities/INavigation';
import { getCurrencies } from '../../models/currencies/actions';
import { styles } from './styles';

interface Props {
    navigation: INavigation
}

export const AllCurrencies: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch();
    const ws = new WebSocketClient();
    const isFocused = navigation.isFocused();
    useEffect(() => {
        dispatch(getCurrencies());
        ws.initSocket('wss://ws.coincap.io/prices?assets=ALL');
        return () => ws.close();
    }, [])

    useEffect(()=> {
        if(ws){
            ws.getInfo(isFocused);
        }
    }, [isFocused])

    const currenciesData = useSelector((state: any) => state.currencies);
    const ratesData = useSelector((state: any) => state.rates);
    console.log('aaa');

    const renderItems = currenciesData?.data?.map((item: ICurrencyItem) => { 
        return (
            <View key={item.id}>
                <Pressable onPress={() => navigation.navigate("DetailCurrency", item)}>
                    <Text style={{fontSize: 16}}>
                        {item?.name} {ratesData?.data[item?.id] ? ratesData?.data[item?.id] : Math.round(item?.priceUsd * 100) / 100}
                    </Text>
                </Pressable>
            </View>
        )
    })
    
    return (
        <View style={styles.container}>
            <ScrollView>
                {renderItems}
            </ScrollView>
        </View>
    )
}