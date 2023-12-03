import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CatalogOrderOptionDefault,
  catalogOrderTypes, CatalogTypeOptionDefault, catalogTypeTypes,
} from 'shared/api/kinopoisk/models';
import { CatalogFilterAndSearchSchema } from '../types/CatalogFilterAndSearchSchema';

const initialState: CatalogFilterAndSearchSchema = {
  order: CatalogOrderOptionDefault,
  type: CatalogTypeOptionDefault,
};

export const CatalogFilterAndSearchSlice = createSlice({
  name: 'CatalogFilterAndSearch',
  initialState,
  reducers: {
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
