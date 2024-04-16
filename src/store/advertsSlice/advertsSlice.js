import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './thunks';
import { handlePeding, handleFulfilledGet, handleRejected } from './handlers';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, handlePeding);
    builder.addCase(fetchAdverts.fulfilled, handleFulfilledGet);
    builder.addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
