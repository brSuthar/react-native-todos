/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Box, Flex, NativeBaseProvider, Text, extendTheme } from 'native-base';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

function App(): JSX.Element {
  return <NativeBaseProvider theme={theme}>
    <SafeAreaProvider>
    </SafeAreaProvider>
  </NativeBaseProvider>
}

const styles = StyleSheet.create({

});

export default App;
