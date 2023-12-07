import { createAsyncThunk } from '@reduxjs/toolkit';
import { kinopoiskApi } from 'shared/api';

export const FetchFilm = createAsyncThunk('FilmPage/fetchFilm', async (id: number, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await kinopoiskApi.films.$getFilm(id);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки фильма: ${error.message}`);
  }
});
