import { catalogURLParams, IcatalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  catalogOrderTypes, catalogTypeTypes,
} from 'shared/api/kinopoisk/models';
import { CatalogFilterAndSearchSchema } from '../types/CatalogFilterAndSearchSchema';

const initialState: CatalogFilterAndSearchSchema = {
  order: catalogOrderTypes.NUM_VOTE,
  type: catalogTypeTypes.ALL,
  // URLParamsIsInstalled: false,
};

export const CatalogFilterAndSearchSlice = createSlice({
  name: 'CatalogFilterAndSearch',
  initialState,
  reducers: {
    // setParams: (state, action: PayloadAction<IcatalogURLParams>) => {
    //   state.type = action.payload.type || catalogOrderTypes.NUM_VOTE as any;
    //   state.order = action.payload.order || catalogTypeTypes.ALL as any;
    //   state.genres = [action.payload.genre] || '' as any;
    //   state.countries = [action.payload.country] || '' as any;
    //   state.keyword = action.payload.keyword || '';

    //   state.URLParamsIsInstalled = true;
    // },
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
