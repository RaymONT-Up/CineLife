import { createSlice } from '@reduxjs/toolkit';
import { FilmPageSchema } from '../types/FilmPageSchema';
import { FetchFilm } from '../service/FetchFilm';

const initialState: FilmPageSchema = {
  isLoading: false,
  error: null,
  film: {},
};

const FilmPageSlice = createSlice({
  name: 'FilmPageSlice',
  initialState,
  reducers: {
    resetFilm() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchFilm.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.film = action.payload;
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
