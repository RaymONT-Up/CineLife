import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.authData = undefined;
      state.isAuth = false;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
