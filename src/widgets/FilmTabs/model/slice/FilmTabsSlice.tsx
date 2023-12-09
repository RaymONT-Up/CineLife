import { createSlice } from '@reduxjs/toolkit';
import { FilmTabsSchema } from '../types/FilmTabsSchema';
import { FetchBudget } from '../service/FetchBudget';
import { FetchImages } from '../service/FetchImages';

const initialState: FilmTabsSchema = {
  isLoading: false,
  error: null,

  budget: {
    total: 0,
    totalPages: 0,
    items: [],
  },

  images: {
    total: 0,
    totalPages: 0,
    items: [],
  },
};

const FilmTabsSlice = createSlice({
  name: 'FilmTabs',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchBudget.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchBudget.fulfilled, (state, action) => {
        state.isLoading = false;
        state.budget = action.payload;
      })
      .addCase(FetchBudget.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(FetchImages.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(FetchImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  reducer: FilmTabsReducer,
  actions: FilmTabsAction,
} = FilmTabsSlice;
