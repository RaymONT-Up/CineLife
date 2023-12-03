import { createAsyncThunk } from '@reduxjs/toolkit';
import { $getFilm } from 'shared/api/kinopoisk/catalog';

export const FetchFilm = createAsyncThunk('FilmPage/fetchFilm', async (id: number, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await $getFilm(id);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки каталога: ${error.message}`);
  }
});
