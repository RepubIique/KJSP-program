import { createSelector } from 'reselect';

const selectRaw = (state) => state.mill.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading
};

