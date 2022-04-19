import { createSelector } from 'reselect';

const selectRaw = (state) => state.funeraria.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const funerariaViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default funerariaViewSelectors;
