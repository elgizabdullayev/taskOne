import React, { FC, memo } from "react";
import { Text } from "react-native";


interface Props{
    changePercent24Hr: string;
    explorer: string;
    marketCapUsd: string;
    id: string;
    symbol: string;
    volumeUsd24Hr: string;
}

export const StaticInfoPart: FC<Props> = memo(({changePercent24Hr, explorer, id, marketCapUsd, symbol, volumeUsd24Hr }) => {
    return (
        <>
        <Text>changePercent24Hr: {changePercent24Hr}</Text>
        <Text>explorer: {explorer}</Text>
        <Text>id: {id}</Text>
        <Text>marketCapUsd: {marketCapUsd}</Text>
        <Text>symbol: {symbol}</Text>
        <Text>volumeUsd24Hr: {volumeUsd24Hr}</Text>
        </>
    )
})