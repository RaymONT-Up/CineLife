import { createAsyncThunk } from '@reduxjs/toolkit';
import { $kinopoisk } from 'shared/api/kinopoisk/base';
import { $getFilms } from 'shared/api/kinopoisk/films';

export const FetchCatalog = createAsyncThunk('catalogPage/fetchCatalog', async (props, thunkApi) => {
  const { rejectWithValue, getState } = thunkApi;

  try {
    const response = await $getFilms();
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch {
    return rejectWithValue('error' as string);
  }
});
