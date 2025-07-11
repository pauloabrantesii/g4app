import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomerListContainer from '../containers/CustomerListContainer';
import ProfileScreen from '../screens/ProfileScreen';
import { colors } from '../utils/colors';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Customers"
        component={CustomerListContainer}
        options={{
          tabBarLabel: 'Clientes',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Componente simples para ícones (simulado)
const TabIcon: React.FC<{ name: string; color: string; size: number }> = ({ 
  name: _name, 
  color: _color, 
  size: _size 
}) => {
  // Em um projeto real, você usaria react-native-vector-icons
  return null;
};

export default MainTabNavigator; 