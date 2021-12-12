import { useIsFocused } from '@react-navigation/core';
import React, { FC } from 'react';
import { Text, Pressable, FlatList } from "react-native";
import { useSelector } from 'react-redux';
import { INavigation } from '../../entities/INavigation';
import { styles } from './styles';

interface Props {
    navigation: INavigation
}

export const AllCurrencies: FC<Props> = ({navigation}) => {
    const isFocused = useIsFocused();
    console.log('isFocused', isFocused)
    const getDataOnFocus = (isFocused: boolean, state: any) => {
        if(isFocused){
            return state.currencies.data;
        }
    }
    const currenciesData = useSelector((state: any) => getDataOnFocus(isFocused, state));

    const renderItem = ({ item }) => (
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