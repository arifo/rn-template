import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ColorSchemeName } from 'react-native';

import { LangTag } from 'managers/LocalManager/types.ts';
import type { RootState } from 'store';

interface SettingsState {
  appTheme: ColorSchemeName | null;
  appLanguage: LangTag | null;
}

const initialState: SettingsState = {
  appTheme: null,
  appLanguage: null,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.appTheme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LangTag>) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { setColorScheme, setLanguage } = settingsSlice.actions;

export const selectSettings = (state: RootState): SettingsState => state.settings;

export default settingsSlice.reducer;
