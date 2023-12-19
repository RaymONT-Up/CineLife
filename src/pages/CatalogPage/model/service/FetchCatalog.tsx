import { createAsyncThunk } from '@reduxjs/toolkit';
import { kinopoiskApi } from 'shared/api';
import { CatalogParams } from 'shared/api/kinopoisk/models';

interface fetchCatalogProps {
  params: CatalogParams;
  loadMore?: boolean;
}

export const FetchCatalog = createAsyncThunk('catalogPageSlice/fetchCatalog', async (props: fetchCatalogProps, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  const { params, loadMore = false } = props;

  try {
    const response = await kinopoiskApi.api.$getCatalog(params);
    if (!response.data) {
      throw new Error();
    }
    return {
      data: response.data,
      loadMore,
    };
  } catch (error) {
    return rejectWithValue(`Ошибка загрузки каталога: ${error.message}`);
  }
});
