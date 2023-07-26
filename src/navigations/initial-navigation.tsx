import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigation from './auth-navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {route} from '../constants';
import {screenConfig} from './config';

const Stack = createNativeStackNavigator();

const InitialNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenConfig}>
        <Stack.Screen name={route.AuthStack} component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InitialNavigation;
