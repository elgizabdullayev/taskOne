import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useEffect, useMemo } from 'react';
import { View, Text, ScrollView, Pressable } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../../models/currencies/actions';
import { WebSocketClient } from '../../webSocket/webSocket';

const Feed = ({}) => {
    const dispatch = useDispatch();
    const ws = new WebSocketClient();
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    useEffect(() => {
        dispatch(getCurrencies());
        ws.getInfo();
    }, [])

    const currenciesData = useSelector((state: any) => state.currencies);
    const ratesData = useSelector((state: any) => state.rates);
    // console.log('============', currenciesData?.data)
    console.log('aaa');

    const renderItems = useMemo(()=> currenciesData?.data?.map((item: any, index: number) => { return (
        <View key={index}>
            <Pressable onPress={() => navigation.replace("DetailCurrency", item)}>
                <Text style={{fontSize: 16}}>
                    {item?.name} {ratesData?.data[item?.id] ? ratesData?.data[item?.id] : Math.round(item?.priceUsd * 100) / 100}
                </Text>
            </Pressable>
        </View>)
    }), [currenciesData, ratesData])

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                {renderItems}
            </ScrollView>
        </View>
    )
}

export {Feed};