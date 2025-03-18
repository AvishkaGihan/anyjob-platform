import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false,
  scrolled: false,
  // Add more UI states as needed
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
    // Add more reducers for additional UI states
  },
});

export const { toggleMobileMenu, setScrolled } = uiSlice.actions;

export default uiSlice.reducer;
