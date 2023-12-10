import { createSlice } from '@reduxjs/toolkit';
import { FilmTabsSchema } from '../types/FilmTabsSchema';
import { FetchBudget } from '../service/FetchBudget';
import { FetchImages } from '../service/FetchImages';
import { FetchFacts } from '../service/FetchFacts';

const initialState: FilmTabsSchema = {
  isLoading: false,

  budget: {
    total: 0,
    totalPages: 0,
    items: [],
    dataReceived: false,
    error: null,
  },

  images: {
    total: 0,
    totalPages: 0,
    items: [],
    dataReceived: false,
    error: null,
  },

  facts: {
    total: 0,
    items: [],
    dataReceived: false,
    error: null,
  },
};

const FilmTabsSlice = createSlice({
  name: 'FilmTabs',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchBudget.pending, (state) => {
        state.isLoading = true;
        state.budget.error = null;
      })
      .addCase(FetchBudget.fulfilled, (state, action) => {
        state.isLoading = false;

        state.budget = {
          ...action.payload,
          dataReceived: true,
        };
      })
      .addCase(FetchBudget.rejected, (state, action) => {
        state.isLoading = false;
        state.budget.dataReceived = true;

        state.budget.error = action.payload as string;
      })

      .addCase(FetchImages.pending, (state) => {
        state.images.error = null;
        state.isLoading = true;
      })
      .addCase(FetchImages.fulfilled, (state, action) => {
        state.isLoading = false;

        state.images = {
          ...action.payload,
          dataReceived: true,
        };
      })
      .addCase(FetchImages.rejected, (state, action) => {
        state.isLoading = false;
        state.budget.dataReceived = true;

        state.images.error = action.payload as string;
      })

      .addCase(FetchFacts.pending, (state) => {
        state.facts.error = null;
        state.isLoading = true;
      })
      .addCase(FetchFacts.fulfilled, (state, action) => {
        state.isLoading = false;

        state.facts = {
          ...action.payload,
          dataReceived: true,
        };
      })
      .addCase(FetchFacts.rejected, (state, action) => {
        state.isLoading = false;
        state.budget.dataReceived = true;

        state.facts.error = action.payload as string;
      });
  },
});

export const {
  reducer: FilmTabsReducer,
  actions: FilmTabsAction,
} = FilmTabsSlice;
