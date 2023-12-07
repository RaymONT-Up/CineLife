import { createSlice } from '@reduxjs/toolkit';
import { FilmTabsSchema } from '../types/FilmTabsSchema';
import { FetchBudget } from '../service/FetchBudget';

const initialState: FilmTabsSchema = {
  isLoading: false,
  error: null,
  description: '',
};

const FilmTabsSlice = createSlice({
  name: 'FilmTabsSlice',
  initialState,
  reducers: {
    resetFilm() {
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
      });
  },
});

export const {
  reducer: FilmTabsReducer,
  actions: FilmTabsAction,
} = FilmTabsSlice;
