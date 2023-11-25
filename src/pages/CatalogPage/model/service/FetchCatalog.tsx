import { createAsyncThunk } from '@reduxjs/toolkit';
import { $getCatalog } from 'shared/api/kinopoisk/films';

export const FetchCatalog = createAsyncThunk('catalogPage/fetchCatalog', async (props, thunkApi) => {
  const { rejectWithValue, getState } = thunkApi;
  try {
    const response = await $getCatalog();
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch {
    return rejectWithValue('error');
  }
});
