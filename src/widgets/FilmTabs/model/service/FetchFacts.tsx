import { createAsyncThunk } from '@reduxjs/toolkit';
import { kinopoiskApi } from 'shared/api';

export const FetchFacts = createAsyncThunk('FilmTabs/FetchFacts', async (id: number, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await kinopoiskApi.films.$getFilmFacts(id);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки данных о фактах: ${error.message}`);
  }
});
