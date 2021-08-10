import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from '../pages/Counter/Counter';
import Dogs from '../pages/Dogs/Dogs';
import { RootStackParamList, RouteNames } from './nav_types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteNames.Counter} component={Counter} />
        <Stack.Screen name={RouteNames.Dogs} component={Dogs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
