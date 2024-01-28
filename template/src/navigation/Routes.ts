import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TabNavParamList = {
  Home: undefined;
  Settings: undefined;
};

export enum TabRoutes {
  Home = 'Home',
  Settings = 'Settings',
}

export type UIKitNavParamList = {
  UIKit: undefined;
  UIKitTypography: undefined;
  UIKitListHeading: undefined;
  UIKitListItems: undefined;
};
export enum UIKitRoutes {
  UIKit = 'UIKit',
  UIKitTypography = 'UIKitTypography',
  UIKitListHeading = 'UIKitListHeading',
  UIKitListItems = 'UIKitListItems',
}

export type RootNavParamList = {
  Root: NavigatorScreenParams<TabNavParamList>;
  Login: undefined;
  Signup: undefined;
  UIKitRoot: NavigatorScreenParams<UIKitNavParamList>;
  ThemeSettings: undefined;
  LanguageSettings: undefined;
};

export enum RootNavRoutes {
  Root = 'Root',
  Login = 'Login',
  Signup = 'Signup',
  UIKitRoot = 'UIKitRoot',
  ThemeSettings = 'ThemeSettings',
  LanguageSettings = 'LanguageSettings',
}

export const Routes = {
  ...RootNavRoutes,
  ...TabRoutes,
  ...UIKitRoutes,
};

export type RootScreenPropTypes<T extends RootNavRoutes> = {
  route: RouteProp<RootNavParamList, T>;
  navigation: NativeStackNavigationProp<RootNavParamList, T>;
};

export type TabScreenPropTypes<T extends TabRoutes> = {
  route: RouteProp<TabNavParamList, T>;
  navigation: BottomTabNavigationProp<TabNavParamList, T>;
};

export type UIKitStackScreenPropTypes<T extends UIKitRoutes> = {
  route: RouteProp<UIKitNavParamList, T>;
  navigation: NativeStackNavigationProp<UIKitNavParamList, T>;
};
