import React, { FC, useMemo } from 'react';
import { View } from "react-native";
import { useSelector } from 'react-redux';
import { StaticInfoPart } from './staticInfoPart';

interface Props {
    navigation: any;
    route: any
}

export const DetailCurrency: FC<Props> = ({navigation, route}) => {
    const {changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr, priceUsd } = route.params;
    const ratesData = useSelector((state: any) => state.rates);
    const rate = useMemo(() => ratesData?.data[id] ? ratesData?.data[id] : Math.round(priceUsd * 100) / 100, [ratesData])
    console.log('bbbbb')
    return (
        <View style={{flex: 1 }}>
            <StaticInfoPart {...{changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr}} />
        </View>
    )
}