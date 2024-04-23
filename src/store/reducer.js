import { advertsReducer } from './advertsSlice/advertsSlice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, advertsReducer);

export const reducer = {
  adverts: persistedReducer,
};
