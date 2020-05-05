import { createSelector } from 'reselect';

const selectRaw = (state) => state.subdivision.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading
};

