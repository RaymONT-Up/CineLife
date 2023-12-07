import { createAsyncThunk } from '@reduxjs/toolkit';
import { kinopoiskApi } from 'shared/api';

export const FetchBudget = createAsyncThunk('FilmPage/FetchBudget', async (id: number, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await kinopoiskApi.films.$getFilmBudget(id);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки данных о бюджете: ${error.message}`);
  }
});
