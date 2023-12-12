import { createAsyncThunk } from '@reduxjs/toolkit';
import { kinopoiskApi } from 'shared/api';

export const FetchPerson = createAsyncThunk('FilmPage/FetchPerson', async (id: number, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await kinopoiskApi.api.$getPerson(id);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки данных: ${error.message}`);
  }
});
