import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { CatalogList } from 'shared/api/kinopoisk/models';
import { CatalogPageSchema } from '../types/catalogPageSchema';
import { FetchCatalog } from '../service/FetchCatalog';

const initialState: CatalogPageSchema = {
  isLoading: false,
  error: undefined,
  loadMore: false,

  //
  items: [],
  page: 1,

  // pagination
  totalItems: null,
  totalPages: null,
};

const catalogPageSlice = createSlice({
  name: 'catalogPageSlice',
  initialState,
  reducers: {
    setLoadMore(state, action:PayloadAction<boolean>) {
      state.loadMore = action.payload;
    },
    setItems(state, action:PayloadAction<CatalogList>) {
      state.items = action.payload;
    },
    setPage(state, action:PayloadAction<number>) {
      state.page = action.payload;
    },

    reset(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchCatalog.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalPages = action.payload.totalPages;
        state.totalItems = action.payload.total;

        if (state.loadMore) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
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
