import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import common, { commonEpic } from './common';
import createNFT, { createNFTEpic } from './createNFT';
import buyNFT, { buyNFTEpic } from './buyNFT';
import getBalance, { getBalanceEpic } from './getBalance';
import explore, { exploreEpic } from './explore';
import search, { searchEpic } from './search';
import sellNFT, { sellNFTEpic } from "./sellNFT";

const reducers = combineReducers({
  common,
  createNFT,
  buyNFT,
  getBalance,
  explore,
  search,
  sellNFT,
});

export const epicMiddleware = createEpicMiddleware({});
const epics = combineEpics(
  commonEpic,
  createNFTEpic,
  buyNFTEpic,
  getBalanceEpic,
  exploreEpic,
  searchEpic,
  sellNFTEpic
);

export const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

export type State = ReturnType<typeof store.getState>;
