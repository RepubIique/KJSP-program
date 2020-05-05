import { createSelector } from 'reselect';

const selectRaw = (state) => state.uom.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading
};

