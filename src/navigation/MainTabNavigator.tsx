import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import FavoritesContainer from '../containers/FavoritesContainer';
import HomeContainer from '../containers/HomeContainer';
import PhoneContainer from '../containers/PhoneContainer';
import { colors } from '../utils/colors';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.white,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Telephone"
        component={PhoneContainer}
        options={{
          tabBarLabel: 'Ligação',
          tabBarIcon: () => (
            <Image source={require('../assets/images/telephone.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={require('../assets/images/user.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesContainer}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: () => (
            <Image source={require('../assets/images/heart.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
