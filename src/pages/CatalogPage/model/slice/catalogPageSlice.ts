import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmList } from '../../../../shared/api/kinopoisk/models';
import { CatalogPageSchema } from '../types/catalogPageSchema';
import { FetchCatalog } from '../service/FetchCatalog';

const initialState: CatalogPageSchema = {
  isLoading: false,
  error: undefined,

  //
  items: [],

  // pagination
  page: 1,
  limit: 20,

  totalItems: null,
  totalPages: null,

  // filters
  search: '',

};

const catalogPageSlice = createSlice({
  name: 'catalogPageSlice',
  initialState,
  reducers: {
    setItems(state, action:PayloadAction<FilmList>) {
      state.items = action.payload;
    },
    setPage(state, action:PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchCatalog.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchCatalog.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;

        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.total;
        state.items = action.payload.items;
        // state.hasMore = action.payload.length >= state.limit;
      })
      .addCase(FetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  reducer: catalogReducer,
  actions: catalogActions,
} = catalogPageSlice;
