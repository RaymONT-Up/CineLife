import { createSlice } from '@reduxjs/toolkit';
import { PersonPageSchema } from '../types/PersonPageSchema';
import { FetchPerson } from '../service/FetchPerson';

const initialState: PersonPageSchema = {
  isLoading: false,
  error: null,
  person: {},
};

const PersonPageSlice = createSlice({
  name: 'PersonPageSlice',
  initialState,
  reducers: {
    resetPerson() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchPerson.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(FetchPerson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.person = action.payload;
      })
      .addCase(FetchPerson.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  reducer: PersonReducer,
  actions: PersonActions,
} = PersonPageSlice;
