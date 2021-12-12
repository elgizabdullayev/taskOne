import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AllCurrencies } from "./views/allCurrencies";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailCurrency } from "./views/detailCurrency";
import { WebSocketClient } from "./api/webSocket/webSocket";
import { useDispatch } from "react-redux";
import { getCurrencies } from "./models/currencies/actions";

const Stack = createNativeStackNavigator();

export default function App() {
    const ws = new WebSocketClient();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCurrencies());
      ws.initSocket('wss://ws.coincap.io/prices?assets=ALL');
      return () => ws.close();
    }, [])
    console.log('ooooooooooooo');

    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="AllCurrencies" component={AllCurrencies} />
            <Stack.Screen name="DetailCurrency" component={DetailCurrency}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }