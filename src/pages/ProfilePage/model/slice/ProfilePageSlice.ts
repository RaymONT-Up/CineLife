import { createSlice } from '@reduxjs/toolkit';
import { ProfilePageSchema } from '../types/ProfilePageTypes';
import fetchFavorites from '../services/fetchFavorites';

const initialState: ProfilePageSchema = {
  isLoading: true,
  error: undefined,
  favorites: [],
  recent: [],
};

export const profilePageSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset() {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.favorites = action.payload;
    });

    builder.addCase(fetchFavorites.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { actions: profileActions } = profilePageSlice;
export const { reducer: profileReducer } = profilePageSlice;
