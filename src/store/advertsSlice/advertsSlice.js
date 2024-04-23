import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertId, fetchAdverts } from './thunks';
import {
  handlePeding,
  handleFulfilledGet,
  handleRejected,
  handleFulfilledGetId,
} from './handlers';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    advert: {},
    favorite: [],
    page: 1,
    limit: 4,
    isLoading: false,
    isLoadMore: false,
    isShowModal: false,
    error: '',
  },
  reducers: {
    nextPage: (state, { payload }) => {
      state.page = payload;
    },
    addFavorite: (state, { payload }) => {
      console.log(payload);
      const id = state.favorite.findIndex(item => item._id === payload._id);

      if (id !== -1) {
        state.favorite.splice(id, 1);
      } else {
        state.favorite.push(payload);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, handlePeding);
    builder.addCase(fetchAdverts.fulfilled, handleFulfilledGet);
    builder.addCase(fetchAdverts.rejected, handleRejected);

    builder.addCase(fetchAdvertId.pending, handlePeding);
    builder.addCase(fetchAdvertId.fulfilled, handleFulfilledGetId);
    builder.addCase(fetchAdvertId.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

export const { nextPage, addFavorite } = advertsSlice.actions;
