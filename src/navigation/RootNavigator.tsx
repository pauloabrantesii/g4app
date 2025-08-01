import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
import LoginContainer from '../containers/LoginContainer';
import { AppState } from '../store';
import MainTabNavigator from './MainTabNavigator';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const { accessToken } = useSelector((state: AppState) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!accessToken ? (
          <>
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordContainer} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={MainTabNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;