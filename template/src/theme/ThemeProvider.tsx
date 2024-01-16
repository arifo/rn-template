import React, { createContext, useContext, useEffect, useMemo } from 'react';

import { ColorSchemeName, StyleSheet, useColorScheme } from 'react-native';

import { setColorScheme } from 'modules/settings/settingsSlice.ts';
import { useAppDispatch, useAppSelector } from 'store';

import { applyTheme } from './styleFunctions.ts';
import { ThemeManager } from './ThemeManager.ts';
import { StylesFn } from './types.ts';

import NamedStyles = StyleSheet.NamedStyles;

const ThemeContext = createContext({
  theme: ThemeManager,
  colors: ThemeManager.colors,
  spacing: ThemeManager.spacing,
  isDarkMode: false,
  setTheme: (colorSchemeName: ColorSchemeName) => {
    ThemeManager.setTheme(colorSchemeName);
  },
});

export const useAppTheme = <T extends NamedStyles<T>>(stylesFn: StylesFn<T> | null) => {
  const context = useContext(ThemeContext);
  const { appTheme } = useAppSelector(state => state.settings);

  const styles = useMemo(() => {
    if (stylesFn === null) {
      return {} as NamedStyles<T>;
    }
    const appliedStyles = applyTheme(stylesFn, context.theme);
    return StyleSheet.create(appliedStyles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.theme, stylesFn, appTheme]);

  return { ...context, styles };
};

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();
  const deviceTheme = useColorScheme();
  const { appTheme } = useAppSelector(state => state.settings);

  useEffect(() => {
    if (!appTheme) {
      dispatch(setColorScheme(deviceTheme));
      ThemeManager.setTheme(deviceTheme);
    } else {
      ThemeManager.setTheme(appTheme);
    }
  }, [appTheme, deviceTheme, dispatch]);

  const setTheme = (schemeName: ColorSchemeName) => {
    ThemeManager.setTheme(schemeName);
    dispatch(setColorScheme(schemeName));
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
