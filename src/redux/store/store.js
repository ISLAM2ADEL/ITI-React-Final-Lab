import { configureStore } from "@reduxjs/toolkit";

import LanguageReducer from '../slices/languageS'
import ThemeReducer from '../slices/themeS'

export let storeConfig = configureStore({
  reducer: {
    languageR: LanguageReducer,
    themeR: ThemeReducer,
  }
});
