import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../modules/auth/welcome';
import {screens} from '../constants';
import {screenConfig} from './config';
import Login from '../modules/auth/login';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenConfig}>
      <Stack.Screen name={screens.Welcome} component={Welcome} />
      <Stack.Screen name={screens.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
