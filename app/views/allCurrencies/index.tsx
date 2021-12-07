import React, { FC, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../../models/currencies/actions';
import { WebSocketClient } from '../../webSocket/webSocket';

interface Props {
    navigation: any
}

export const AllCurrencies: FC<Props> = ({navigation}) => {
    const dispatch = useDispatch();
    const ws = new WebSocketClient();
    useEffect(() => {
        dispatch(getCurrencies());
        ws.getInfo();
    }, [])

    const currenciesData = useSelector((state: any) => state.currencies);
    const ratesData = useSelector((state: any) => state.rates);
    console.log('aaa');

    const renderItems = currenciesData?.data?.map((item: any, index: number) => { return (
        <View key={index}>
            <Pressable onPress={() => navigation.replace("DetailCurrency", item)}>
                <Text style={{fontSize: 16}}>
                    {item?.name} {ratesData?.data[item?.id] ? ratesData?.data[item?.id] : Math.round(item?.priceUsd * 100) / 100}
                </Text>
            </Pressable>
        </View>)
    })
    
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                {renderItems}
            </ScrollView>
        </View>
    )
}