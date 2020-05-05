import { createSelector } from 'reselect';

const selectRaw = (state) => state.week.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading
};

