import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListHeadingComponents } from 'views/screens/UIKit/ListHeadingComponents.tsx';
import { ListItemComponents } from 'views/screens/UIKit/ListItemComponents.tsx';
import { UIKitTypography } from 'views/screens/UIKit/Typography.tsx';
import UIKit from 'views/screens/UIKit/UIKit.tsx';

import { UIKitNavParamList, UIKitRoutes } from './Routes.ts';

const UIKitStack = createNativeStackNavigator<UIKitNavParamList>();

export const UIKitNav = () => (
  <UIKitStack.Navigator screenOptions={{ headerShown: false }}>
    <UIKitStack.Screen name={UIKitRoutes.UIKit} component={UIKit} />
    <UIKitStack.Screen name={UIKitRoutes.UIKitTypography} component={UIKitTypography} />
    <UIKitStack.Screen name={UIKitRoutes.UIKitListHeading} component={ListHeadingComponents} />
    <UIKitStack.Screen name={UIKitRoutes.UIKitListItems} component={ListItemComponents} />
  </UIKitStack.Navigator>
);
