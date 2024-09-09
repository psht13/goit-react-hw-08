import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

// const setAuthHeaders = (token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', credentials);

      console.log({ data });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', credentials);

      console.log({ data });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const { data } = await instance.post('/users/logout');

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
