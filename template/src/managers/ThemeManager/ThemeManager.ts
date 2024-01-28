import { ColorSchemeName } from 'react-native';

import { darkColors } from './darkColors.ts';
import { LayoutManager, spacing } from './layout.ts';
import { lightColors } from './lightColors.ts';
import { ColorProps, LayoutType, SpacingType } from './types.ts';

interface ThemeManagerProps {
  colorScheme: ColorSchemeName;
  layoutSpacing: SpacingType;
  lightSchemeColors: ColorProps;
  darkSchemeColors: ColorProps;
  layout: LayoutType;
}

export class ThemeManagerClass {
  private static _instance: ThemeManagerClass;
  private readonly _layout: LayoutType;
  private _colorScheme: ColorSchemeName;
  private _activeColors: ColorProps;
  private readonly _lightColors: ColorProps;
  private readonly _darkColors: ColorProps;
  private readonly _spacing: SpacingType;

  private constructor({
    colorScheme,
    layoutSpacing,
    lightSchemeColors,
    darkSchemeColors,
    layout,
  }: ThemeManagerProps) {
    this._spacing = layoutSpacing;
    this._colorScheme = colorScheme;
    this._activeColors = lightSchemeColors;
    this._lightColors = lightSchemeColors;
    this._darkColors = darkSchemeColors;
    this._layout = layout;
  }

  public static get Instance(): ThemeManagerClass {
    if (!ThemeManagerClass._instance) {
      ThemeManagerClass._instance = new ThemeManagerClass({
        colorScheme: 'light',
        layoutSpacing: spacing,
        lightSchemeColors: lightColors,
        darkSchemeColors: darkColors,
        layout: new LayoutManager(),
      });
    }

    return ThemeManagerClass._instance;
  }

  get colorScheme(): ColorSchemeName {
    return this._colorScheme;
  }

  get colors(): ColorProps {
    return this._activeColors;
  }

  get spacing(): SpacingType {
    return this._spacing;
  }

  get layout(): LayoutType {
    return this._layout;
  }

  setLightTheme(): void {
    this._colorScheme = 'light';
    this._activeColors = this._lightColors;
  }

  setDarkTheme(): void {
    this._colorScheme = 'dark';
    this._activeColors = this._darkColors;
  }

  setTheme(theme: ColorSchemeName): void {
    if (theme === 'dark') {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }
}
