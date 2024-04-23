import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdvertApi, getAdvertsApi } from 'api/adverts';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', page =>
  getAdvertsApi(page)
);

export const fetchAdvertId = createAsyncThunk('adverts/fetchAdvert', id =>
  getAdvertApi(id)
);
