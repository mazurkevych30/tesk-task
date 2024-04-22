import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './thunks';
import { handlePeding, handleFulfilledGet, handleRejected } from './handlers';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    page: 1,
    isLoading: false,
    error: '',
  },
  reducers: {
    nextPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, handlePeding);
    builder.addCase(fetchAdverts.fulfilled, handleFulfilledGet);
    builder.addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

export const { nextPage } = advertsSlice.actions;
