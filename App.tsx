import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { themes } from './src/constants';
import AuthLayout from './src/components/layout/auth-layout';
import InitialNavigation from './src/navigations/initial-navigation';

function App(): JSX.Element {
  return <NativeBaseProvider isSSR={false} theme={themes}>
    <Box flex={1}>
      <InitialNavigation/>
    </Box>
  </NativeBaseProvider>
}

const styles = StyleSheet.create({

});

export default App;
