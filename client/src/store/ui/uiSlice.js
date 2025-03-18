import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false,
  scrolled: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setScrolled: (state, action) => {
      state.scrolled = action.payload;
    },
  },
});

export const { toggleMobileMenu, setScrolled } = uiSlice.actions;
export default uiSlice.reducer;
