import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Welcome from "../modules/auth/welcome";
import { screens } from "../constants";
import { screenConfig } from "./config";

const Stack = createNativeStackNavigator();

const AuthNavigation = () =>{
  return <Stack.Navigator screenOptions={screenConfig}>
    <Stack.Screen name={screens.Welcome} component={Welcome}/>
  </Stack.Navigator>
}

export default AuthNavigation;