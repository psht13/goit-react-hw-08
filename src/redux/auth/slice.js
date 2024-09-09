import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, () => {})
      .addCase(register.fulfilled, (state, action) => {
        state.error = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload.error;
      })

      .addCase(login.pending, () => {})
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(logout.pending, () => {})
      .addCase(logout.fulfilled, (state) => {
        state.error = null;
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
