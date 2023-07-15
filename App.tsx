import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { themes } from './src/constants';

function App(): JSX.Element {
  return <NativeBaseProvider isSSR={false} theme={themes}>
  </NativeBaseProvider>
}

const styles = StyleSheet.create({

});

export default App;
