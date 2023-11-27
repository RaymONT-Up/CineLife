import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogFilterAndSearchSchema } from '../types/CatalogFilterAndSearchSchema.ts';

const initialState: CatalogFilterAndSearchSchema = {

};

export const CatalogFilterAndSearchSlice = createSlice({
  name: 'CatalogFilterAndSearch',
  initialState,
  reducers: {

  },
});

export const { actions: CatalogFilterAndSearchActions } = CatalogFilterAndSearchSlice;
export const { reducer: CatalogFilterAndSearchReducer } = CatalogFilterAndSearchSlice;
