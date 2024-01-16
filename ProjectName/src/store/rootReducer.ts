import { combineReducers } from '@reduxjs/toolkit';

import settings from 'modules/settings/settingsSlice';

const rootReducer = combineReducers({
  settings,
});

export default rootReducer;
