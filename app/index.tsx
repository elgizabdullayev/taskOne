import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from "./views/feed";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailCurrency } from "./views/detailCurrency";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="DetailCurrency" component={DetailCurrency} detachPreviousScreen={true}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }