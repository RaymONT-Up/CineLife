import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  catalogOrderTypes, catalogTypeTypes,
} from 'shared/api/kinopoisk/models';
import { CatalogFilterAndSearchSchema } from '../types/CatalogFilterAndSearchSchema';

const initialState: CatalogFilterAndSearchSchema = {
  countries: [],
  genres: [],
  order: catalogOrderTypes.NUM_VOTE,
  type: catalogTypeTypes.ALL,
  keyword: '',
  page: 1,
};

export const CatalogFilterAndSearchSlice = createSlice({
  name: 'CatalogFilterAndSearch',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setType: (state, action: PayloadAction<catalogTypeTypes>) => {
      state.type = action.payload;
    },
    setOrder: (state, action: PayloadAction<catalogOrderTypes>) => {
      state.order = action.payload;
    },
    setRatingFrom: (state, action: PayloadAction<number>) => {
      state.ratingFrom = action.payload;
    },
    setRatingTo: (state, action: PayloadAction<number>) => {
      state.ratingTo = action.payload;
    },
    setYearFrom: (state, action: PayloadAction<number>) => {
      state.yearFrom = action.payload;
    },
    setYearTo: (state, action: PayloadAction<number>) => {
      state.yearTo = action.payload;
    },
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setCountries: (state, action: PayloadAction<number[]>) => {
      state.countries = action.payload;
    },
    setGenres: (state, action: PayloadAction<number[]>) => {
      state.genres = action.payload;
    },
    resetCatalogParams: (state) => ({ ...initialState }),
  },
});

export const { actions: CatalogFilterAndSearchActions } = CatalogFilterAndSearchSlice;
export const { reducer: CatalogFilterAndSearchReducer } = CatalogFilterAndSearchSlice;
