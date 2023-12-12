import { createAsyncThunk } from '@reduxjs/toolkit';
import { kinopoiskApi } from 'shared/api';

export const FetchImages = createAsyncThunk('FilmTabs/FetchImages', async (id: number, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await kinopoiskApi.api.$getFilmImages(id);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки данных о изображениях: ${error.message}`);
  }
});
