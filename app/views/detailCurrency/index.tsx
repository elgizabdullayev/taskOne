import React, { FC, useEffect, useMemo } from 'react';
import { Button, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import { WebSocketClient } from '../../api/webSocket/webSocket';
import { ICurrencyItem } from '../../entities/ICurrencyItem';
import { INavigation } from '../../entities/INavigation';
import { styles } from '../allCurrencies/styles';
import { StaticInfoPart } from './staticInfoPart';

interface Props {
    navigation: INavigation;
    route: { params: ICurrencyItem }
}

export const DetailCurrency: FC<Props> = ({navigation, route}) => {
    const {changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr, priceUsd } = route.params;
    const ws = new WebSocketClient();
    useEffect(() => {
        if(ws){
            ws.getCurrencyRate(id);
        }
    }, [])

    const rateData = useSelector((state: any) => state.currencyRate);
    const rate = rateData.data ? rateData.data : Math.round(priceUsd * 100) / 100 ;
    const goBack = () => navigation.goBack();

    console.log('bbbbb', rateData)
    return (
        <View style={styles.container}>
            <StaticInfoPart {...{changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr}} />
            <Text>rate: {rate}</Text>
            <Button title={'Back'} onPress={goBack}/>
        </View>
    )
}
