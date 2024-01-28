import { StyleSheet } from 'react-native';

import ThemeManager from 'managers/ThemeManager';

export type StylesFnType<T> = (theme: typeof ThemeManager) => StyleSheet.NamedStyles<T> | T;

export function applyTheme<T extends StyleSheet.NamedStyles<T>>(
  styles: StylesFnType<T>,
  themeManager: typeof ThemeManager,
): StyleSheet.NamedStyles<T> | T {
  const appliedStyles: Partial<StyleSheet.NamedStyles<T>> = {};

  const stylesObject = styles(themeManager);

  for (const key in stylesObject) {
    if (Object.prototype.hasOwnProperty.call(stylesObject, key)) {
      appliedStyles[key] = stylesObject[key];
    }
  }

  return appliedStyles as StyleSheet.NamedStyles<T>;
}

export function createStyles<T extends StyleSheet.NamedStyles<T>>(stylesFn: StylesFnType<T>) {
  return (theme: typeof ThemeManager): StyleSheet.NamedStyles<T> | T => applyTheme(stylesFn, theme);
}
