import { useIsFocused } from '@react-navigation/core';
import React, { FC, useMemo } from 'react';
import { Text, Pressable, FlatList } from "react-native";
import { useSelector } from 'react-redux';
import { ICurrencyItem } from '../../entities/ICurrencyItem';
import { INavigation } from '../../entities/INavigation';
import { getStyles } from './styles';

interface Props {
    navigation: INavigation
}

export const AllCurrencies: FC<Props> = ({navigation}) => {
    const styles = useMemo(()=>getStyles(), []);
    const isFocused = useIsFocused();

    const getDataOnFocus = (isFocused: boolean, state: any) => {
        if(isFocused){
            return state.currencies.data;
        }
    }
    const currenciesData = useSelector((state: any) => getDataOnFocus(isFocused, state));

    const renderItem = ({ item }: {item: ICurrencyItem}) => (
        <Pressable key={item.id + item.priceUsd} onPress={() => navigation.navigate("DetailCurrency", item)}>
            <Text style={styles.textStyle}>
            {item?.name} {item.priceUsd}
            </Text>
        </Pressable>
    );
    
    return (
        <FlatList
            data={currenciesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}