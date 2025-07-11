/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import './src/i18n';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/store';

const AppWithProviders = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#FF69B4"
        barStyle="light-content"
        hidden={false}
      />
      <RootNavigator />

    </SafeAreaView>
  );
};

function App() {

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppWithProviders />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
