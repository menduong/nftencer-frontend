import { createSelector } from 'reselect';
import { State } from 'store';

export const getBalanceStore = createSelector(
  (state: State) => state.getBalance,
  (balance): { [key: string]: number } => ({
    BUSD: Number(balance.busdBalance),
    CONUT: Number(balance.contBalance),
  })
);
