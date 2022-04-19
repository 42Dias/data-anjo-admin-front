import { createSelector } from 'reselect';

const selectRaw = (state) => state.cerimonia.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const cerimoniaViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default cerimoniaViewSelectors;
