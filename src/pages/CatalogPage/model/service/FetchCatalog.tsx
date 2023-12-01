import { createAsyncThunk } from '@reduxjs/toolkit';
import { $getCatalog } from 'shared/api/kinopoisk/catalog';
import { CatalogParams } from 'shared/api/kinopoisk/models';

export const FetchCatalog = createAsyncThunk('catalogPage/fetchCatalog', async (props: CatalogParams, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await $getCatalog(props);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки каталога: ${error.message}`);
  }
});
