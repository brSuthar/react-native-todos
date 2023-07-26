import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {themes} from './src/constants';
import InitialNavigation from './src/navigations/initial-navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NativeBaseProvider isSSR={false} theme={themes}>
        <Box flex={1}>
          <InitialNavigation />
        </Box>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {height: '100%', width: '100%'},
});

export default App;
