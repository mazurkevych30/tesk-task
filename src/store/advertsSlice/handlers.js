export function handlePeding(state) {
  state.isLoading = true;
  state.error = null;
}

export function handleRejected(state, { error }) {
  state.isLoading = false;
  state.error = error.message;
}

export function handleFulfilledGet(state, { payload }) {
  state.adverts = payload;
  state.isLoadMore = state.limit === state.adverts.length / state.page;
  state.isLoading = false;
}

export function handleFulfilledGetId(state, { payload }) {
  state.advert = payload;
  state.isLoading = false;
}
