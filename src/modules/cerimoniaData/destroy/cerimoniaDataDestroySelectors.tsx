import { createSelector } from 'reselect';

const selectRaw = (state) => state.cerimoniaData.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const cerimoniaDestroySelectors = {
  selectLoading,
};

export default cerimoniaDestroySelectors;
