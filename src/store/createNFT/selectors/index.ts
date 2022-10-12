import { createSelector } from 'reselect';
import { State } from 'store';

export const getCreateStore = createSelector(
  (state: State) => state.createNFT,
  createNFT => createNFT
);

export const getStep = createSelector(getCreateStore, store => store.currentStep);
