import React, { FC } from 'react';
import { Button, Text, View } from "react-native";
import { shallowEqual, useSelector } from 'react-redux';
import { ICurrencyItem } from '../../entities/ICurrencyItem';
import { INavigation } from '../../entities/INavigation';
import { styles } from '../allCurrencies/styles';
import { StaticInfoPart } from './staticInfoPart';

interface Props {
    navigation: INavigation;
    route: { params: ICurrencyItem }
}

export const DetailCurrency: FC<Props> = ({navigation, route}) => {
    const {changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr } = route.params;
    console.log('id', id)
    const rate = useSelector((state: any) => state.currencies.data?.find((rate: ICurrencyItem)=>{
        return rate.id == id
    }), shallowEqual);

    return (
        <View style={styles.container}>
            <StaticInfoPart {...{changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr}} />
            <Text>rate: {rate.priceUsd}</Text>
            <Button title={'Back'} onPress={navigation.goBack}/>
        </View>
    )
}
