import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UIKitNav } from 'navigation/UIKitNav.tsx';
import LoginScreen from 'views/screens/Auth/Login';
import SignupScreen from 'views/screens/Auth/Signup';
import HomeScreen from 'views/screens/Home';
import SettingsScreen from 'views/screens/SettingsScreens/Settings';

import { RootNavParamList, Routes, TabNavParamList } from './Routes';
import { LanguageSettings } from 'views/screens/SettingsScreens/Languages';
import { ThemeSettings } from 'views/screens/SettingsScreens/Themes';

const Stack = createNativeStackNavigator<RootNavParamList>();
const Tab = createBottomTabNavigator<TabNavParamList>();

const TabNav = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name={Routes.Home} component={HomeScreen} />
    <Tab.Screen name={Routes.Settings} component={SettingsScreen} />
  </Tab.Navigator>
);

function RootNavigator() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Root} component={TabNav} />
        <Stack.Screen name={Routes.Login} component={LoginScreen} />
        <Stack.Screen name={Routes.Signup} component={SignupScreen} />
        <Stack.Screen name={Routes.UIKitRoot} component={UIKitNav} />
        <Stack.Screen name={Routes.ThemeSettings} component={ThemeSettings} />
        <Stack.Screen name={Routes.LanguageSettings} component={LanguageSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
