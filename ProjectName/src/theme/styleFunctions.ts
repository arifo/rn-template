import { StyleSheet } from 'react-native';

import { ThemeManager } from 'theme/ThemeManager.ts';
import { StylesFn } from 'theme/types.ts';

import NamedStyles = StyleSheet.NamedStyles;

export function applyTheme<T extends NamedStyles<T>>(
  styles: StylesFn<T>,
  themeManager: typeof ThemeManager,
): NamedStyles<T> | T {
  const appliedStyles: Partial<NamedStyles<T>> = {};

  const stylesObject = styles(themeManager);

  for (const key in stylesObject) {
    if (Object.prototype.hasOwnProperty.call(stylesObject, key)) {
      appliedStyles[key] = stylesObject[key];
    }
  }

  return appliedStyles as NamedStyles<T>;
}

export function createStyles<T extends NamedStyles<T>>(stylesFn: StylesFn<T>) {
  return (theme: typeof ThemeManager): NamedStyles<T> | T => applyTheme(stylesFn, theme);
}
