import { createSelector } from 'reselect';
import { State } from 'store';

export const getSearchStore = createSelector(
  (state: State) => state.search,
  result => result
);
