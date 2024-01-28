import React, { createContext, useContext, useEffect, useMemo } from 'react';

import { ColorSchemeName, StyleSheet, useColorScheme } from 'react-native';

import ThemeManager from 'managers/ThemeManager';
import { setColorScheme } from 'modules/settings/settingsSlice.ts';
import { useAppDispatch, useAppSelector } from 'store';

import { applyTheme, StylesFnType } from './styleFunctions.ts';

export const ThemeContext = createContext({
  theme: ThemeManager,
  colors: ThemeManager.colors,
  spacing: ThemeManager.spacing,
  isDarkMode: false,
  setTheme: (colorSchemeName: ColorSchemeName) => {
    ThemeManager.setTheme(colorSchemeName);
  },
});

export const useAppTheme = <T extends StyleSheet.NamedStyles<T>>(
  stylesFn: StylesFnType<T> | null,
) => {
  const context = useContext(ThemeContext);
  const { appTheme } = useAppSelector(state => state.settings);

  const styles = useMemo(() => {
    if (stylesFn === null) {
      return {} as StyleSheet.NamedStyles<T>;
    }
    const appliedStyles = applyTheme(stylesFn, context.theme);
    return StyleSheet.create(appliedStyles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.theme, stylesFn, appTheme]);

  return { ...context, styles, appTheme };
};

export const ThemeContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();
  const deviceTheme = useColorScheme();
  const { appTheme } = useAppSelector(state => state.settings);

  useEffect(() => {
    if (!appTheme) {
      ThemeManager.setTheme(deviceTheme);
    } else {
      ThemeManager.setTheme(appTheme);
    }
  }, [appTheme, deviceTheme, dispatch]);

  const setTheme = (schemeName: ColorSchemeName) => {
    if (!schemeName && deviceTheme) {
      ThemeManager.setTheme(deviceTheme);
      dispatch(setColorScheme(null));
    } else {
      dispatch(setColorScheme(schemeName));
      ThemeManager.setTheme(schemeName);
    }
  };

  const contextValues = {
    setTheme,
    theme: ThemeManager,
    colors: ThemeManager.colors,
    spacing: ThemeManager.spacing,
    isDarkMode: appTheme === 'dark',
  };

  return <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>;
};
