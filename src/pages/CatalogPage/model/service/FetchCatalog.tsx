import { createAsyncThunk } from '@reduxjs/toolkit';
import { kinopoiskApi } from 'shared/api';
import { CatalogParams } from 'shared/api/kinopoisk/models';

export const FetchCatalog = createAsyncThunk('catalogPage/fetchCatalog', async (props: CatalogParams, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await kinopoiskApi.api.$getCatalog(props);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки каталога: ${error.message}`);
  }
});
