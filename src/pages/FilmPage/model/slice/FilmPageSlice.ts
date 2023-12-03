import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { FilmPageSchema } from '../types/FilmPageSchema';
import { FetchFilm } from '../service/FetchFilm';

const initialState: FilmPageSchema = {
  isLoading: false,
  error: null,
};

const FilmPageSlice = createSlice({
  name: 'FilmPageSlice',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchFilm.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchFilm.fulfilled, (state, action) => {

      })
      .addCase(FetchFilm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  reducer: FilmReducer,
  actions: FilmActions,
} = FilmPageSlice;
