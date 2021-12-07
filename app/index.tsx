import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AllCurrencies } from "./views/allCurrencies";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailCurrency } from "./views/detailCurrency";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="AllCurrencies" component={AllCurrencies} />
            <Stack.Screen name="DetailCurrency" component={DetailCurrency}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }