export function handlePeding(state) {
  state.isLoading = true;
  state.error = null;
}

export function handleRejected(state, { error }) {
  state.isLoading = false;
  state.error = error.message;
}

export function handleFulfilledGet(state, { payload }) {
  state.adverts = [...state.adverts, ...payload];
  state.isLoadMore = payload.length >= state.limit;
  state.isLoading = false;
}

export function handleFulfilledGetId(state, { payload }) {
  state.advert = payload;
  state.isLoading = false;
}
