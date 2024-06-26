import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.adverts;
export const selectAdvert = state => state.adverts.advert;
export const selectFavorite = state => state.adverts.favorite;
export const selectorPage = state => state.adverts.page;
export const selectorLimit = state => state.adverts.limit;
export const selectorIsLoadMore = state => state.adverts.isLoadMore;

export const selectFilteredAdverts = createSelector(
  [selectAdverts],
  adverts => {
    return adverts;
  }
);
