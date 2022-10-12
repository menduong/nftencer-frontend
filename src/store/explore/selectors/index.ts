import { createSelector } from 'reselect';
import { State } from 'store';

export const getExploreStore = createSelector(
  (state: State) => state.explore,
  explore => explore
);
