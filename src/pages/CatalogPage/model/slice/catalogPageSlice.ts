import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { CatalogList } from 'shared/api/kinopoisk/models';
import { CatalogPageSchema } from '../types/catalogPageSchema';
import { FetchCatalog } from '../service/FetchCatalog';

const initialState: CatalogPageSchema = {
  isLoading: false,
  error: undefined,
  //
  items: [],

  // pagination
  page: 1,

  totalItems: null,
  totalPages: null,
};

const catalogPageSlice = createSlice({
  name: 'catalogPageSlice',
  initialState,
  reducers: {

    setItems(state, action:PayloadAction<CatalogList>) {
      state.items = action.payload;
    },
    setPage(state, action:PayloadAction<number>) {
      state.page = action.payload;
    },

    reset: (state) => ({ ...initialState }),

  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchCatalog.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;

        const { data, loadMore } = action.payload;

        state.totalPages = data.totalPages;
        state.totalItems = data.total;

        if (loadMore) {
          state.items = [...state.items, ...data.items];
        } else {
          state.items = data.items;
        }
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
