import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';

const initialState: AuthSchema = {
  email: '',
  password: '',
  repeatPassword: '',
  isLoading: false,
  error: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setPassword(state, action) {
      state.password = action.payload.password;
    },
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
