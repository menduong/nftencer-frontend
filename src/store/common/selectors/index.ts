import { createSelector } from 'reselect';
import { State } from 'store';

export const getCommon = createSelector(
  (state: State) => state.common,
  common => common
);
