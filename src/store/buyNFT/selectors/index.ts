import { createSelector } from 'reselect';
import { State } from 'store';

export const getBuyStore = createSelector(
  (state: State) => state.buyNFT,
  buyNFT => buyNFT
);
