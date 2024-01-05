import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritesSchema } from '../types/favoriteTypes';
import checkIsFavorite from '../services/checkIsFavorite';
import setFavorite from '../services/setFavorite';

const initialState: FavoritesSchema = {
  status: null,
  isLoading: true,
  error: undefined,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    reset() {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkIsFavorite.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(checkIsFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload;
    });

    builder.addCase(checkIsFavorite.rejected, (state, action) => {
      state.isLoading = false;

      state.error = action.payload as string;
    });

    builder.addCase(setFavorite.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(setFavorite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload;
    });

    builder.addCase(setFavorite.rejected, (state, action) => {
      state.isLoading = false;

      state.error = action.payload as string;
    });
  },
});

export const { actions: favoritesActions } = favoritesSlice;
export const { reducer: favoritesReducer } = favoritesSlice;
