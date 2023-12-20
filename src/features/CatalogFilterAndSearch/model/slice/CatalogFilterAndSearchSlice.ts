import { IcatalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  catalogOrderTypes, catalogTypeTypes,
} from 'shared/api/kinopoisk/models';
import isValidUrlParam from 'shared/lib/urlParams/isValidUrlParam';
import { CatalogFilterAndSearchSchema } from '../types/CatalogFilterAndSearchSchema';

export const catalogDefaultOrder = catalogOrderTypes.NUM_VOTE;
export const catalogDefaultType = catalogTypeTypes.ALL;

const initialState: CatalogFilterAndSearchSchema = {
  order: catalogDefaultOrder,
  type: catalogDefaultType,
  URLParamsIsInstalled: false,
};

export const CatalogFilterAndSearchSlice = createSlice({
  name: 'CatalogFilterAndSearch',
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<IcatalogURLParams>) => {
      const {
        type, keyword, order, genre, country,
      } = action.payload;

      if (isValidUrlParam(type, catalogTypeTypes)) {
        state.type = type as catalogTypeTypes;
      }
      if (isValidUrlParam(order, catalogOrderTypes)) {
        state.order = order as catalogOrderTypes;
      }
      if (keyword && keyword !== '') {
        state.keyword = keyword;
      }

      if (order) {
        state.genres = [genre];
      }

      if (genre) {
        state.genres = [genre];
      }

      if (country) {
        state.countries = [country];
      }

      state.URLParamsIsInstalled = true;
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
