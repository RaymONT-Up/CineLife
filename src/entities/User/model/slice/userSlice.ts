import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
  username: null,
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UserSchema>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.username = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
