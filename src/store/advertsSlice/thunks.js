import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdvertsApi } from 'api/adverts';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', () =>
  getAdvertsApi()
);
