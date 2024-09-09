import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthHeaders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', credentials);

      setAuthHeaders(data.token);

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

      setAuthHeaders(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await instance.post('/users/logout');

    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;

      setAuthHeaders(token);

      const { data } = await instance.get('/users/current');

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;

      if (token) return true;

      return false;
    },
  }
);
