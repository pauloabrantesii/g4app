/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { scaleSize } from './src/helper/responsive';
import './src/i18n';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/store';
import { colors } from './src/utils/colors';

const AppWithProviders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
        />
      </View>

      <RootNavigator />
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  statusBar: {
    height: scaleSize(56),
    backgroundColor: colors.primary,
  },
});

export default App;
