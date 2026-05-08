import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: localStorage.getItem("lang") || "en",
  },
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === "en" ? "ar" : "en";
      localStorage.setItem("lang", state.lang);
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", state.lang);
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
