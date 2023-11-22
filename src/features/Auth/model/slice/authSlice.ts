import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import loginByEmailAndPassword from '../services/loginByEmailAndPassword/loginByEmailAndPassword';

const initialState: AuthSchema = {
  email: '',
  password: '',
  repeatPassword: '',
  isLoading: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByEmailAndPassword.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(loginByEmailAndPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
