import { createSlice } from '@reduxjs/toolkit';

export const navigatorSlice = createSlice({
  name: 'navigator',
  initialState: {
    position: 'fixed'
  },
  reducers: {
    fix: (state) => {
      state.position = 'fixed';
    },
    fluid: (state) => {
      state.position = 'absolute';
    }
  }
});

export const { fix, fluid } = navigatorSlice.actions;

export default navigatorSlice.reducer;
