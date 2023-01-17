import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from '../../service/user/auth.service';
import { AxiosBasicCredentials } from 'axios';

const initialState: {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginUserInfo?: object;
} = {
  isAuthenticated: false,
  isLoading: false,
  loginUserInfo: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.loginUserInfo = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
    });
    // logout
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.loginUserInfo = undefined;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.loginUserInfo = undefined;
    });
  },
});

export const login = createAsyncThunk('auth/login', async (credentials: AxiosBasicCredentials, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await authService.login(credentials);
    return fulfillWithValue(response.data);
  } catch (e: any) {
    return rejectWithValue(e.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async (arg, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await authService.logout();
    return fulfillWithValue(response.data);
  } catch (e: any) {
    return rejectWithValue(e.response.data);
  }
});

export default authSlice.reducer;
