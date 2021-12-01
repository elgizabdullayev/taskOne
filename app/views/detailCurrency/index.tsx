import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useMemo } from 'react';
import { View, Text,ScrollView, Button} from "react-native";
import { useSelector } from 'react-redux';

const DetailCurrency = ({}) => {
    const route = useRoute();
    const {changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr, priceUsd } = route.params;
    const ratesData = useSelector((state: any) => state.rates);
    const rate = useMemo(() => ratesData?.data[id] ? ratesData?.data[id] : Math.round(priceUsd * 100) / 100, [ratesData])
    const navigation = useNavigation();
    console.log('bbbbb')
    return (
        <View style={{flex: 1 }}>
           <ScrollView>
                <Text>changePercent24Hr: {changePercent24Hr}</Text>
                <Text>explorer: {explorer}</Text>
                <Text>id: {id}</Text>
                <Text>marketCapUsd: {marketCapUsd}</Text>
                <Text>symbol: {symbol}</Text>
                <Text>volumeUsd24Hr: {volumeUsd24Hr}</Text>
                <Text>rate: {rate}</Text>
                <Button title={"GO BACK"} onPress={()=>navigation.replace('Feed')}></Button>
            </ScrollView>
        </View>
    )
}

export {DetailCurrency};