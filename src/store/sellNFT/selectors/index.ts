import { createSelector } from "reselect";
import { State } from "store";

export const getCreateStore = createSelector(
  (state: State) => state.sellNFT,
  (sellNFT) => sellNFT
);

export const getStep = createSelector(
  getCreateStore,
  (store) => store.currentStep
);
