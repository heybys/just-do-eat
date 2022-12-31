import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    profile: undefined,
  },
  reducers: {
    authenticate: (state, action) => ({
      isAuthenticated: true,
      profile: action.payload,
    }),
    deauthenticate: (state) => ({
      isAuthenticated: false,
      profile: undefined,
    }),
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
