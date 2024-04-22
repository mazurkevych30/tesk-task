export function handlePeding(state) {
  state.isLoading = true;
  state.error = null;
}

export function handleRejected(state, { error }) {
  state.isLoading = false;
  state.error = error.message;
}

export function handleFulfilledGet(state, { payload }) {
  if (payload.length) state.adverts = [...state.adverts, ...payload];

  state.isLoadMore = state.limit === state.adverts.length / state.page;
  console.log(state.isLoadMore);
  state.isLoading = false;
}
