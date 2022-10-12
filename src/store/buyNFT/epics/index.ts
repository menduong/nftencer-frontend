import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { purchase, approveBUSD, getProduct, approveCONT } from 'store/buyNFT';
import { BUSDContract, CONTContract, SimpleExchangeContract } from 'lib/smartContract';
import axios from 'axios';
import { formatSaleBalance } from 'util/formatBalance';

const approveBUSDEpic: Epic = action$ =>
  action$.pipe(
    filter(approveBUSD.started.match),
    mergeMap(action => {
      const price = action.payload.price;
      return from(
        BUSDContract.sendWithMiddleware(
          'increaseAllowance',
          action.payload.middlewareMethods,
          process.env.SIMPLE_EXCHANGE_ADDRESS,
          formatSaleBalance('BUSD', price).toString()
        )
      ).pipe(
        map(res => {
          return purchase.started({
            idNFT: action.payload.idNFT,
            bnbPrice: undefined,
            middlewareMethods: action.payload.middlewareMethods,
          });
        }),
        catchError(error => of(approveBUSD.failed({ params: action.payload, error: error })))
      );
    })
  );

const approveCONTEpic: Epic = action$ =>
  action$.pipe(
    filter(approveCONT.started.match),
    mergeMap(action => {
      const price = action.payload.price;
      return from(
        CONTContract.sendWithMiddleware(
          'increaseAllowance',
          action.payload.middlewareMethods,
          process.env.SIMPLE_EXCHANGE_ADDRESS,
          formatSaleBalance('CONUT', price).toString()
        )
      ).pipe(
        map(res => {
          return purchase.started({
            idNFT: action.payload.idNFT,
            bnbPrice: undefined,
            middlewareMethods: action.payload.middlewareMethods,
          });
        }),
        catchError(error => of(approveCONT.failed({ params: action.payload, error: error })))
      );
    })
    
  );

const purchaseEpic: Epic = action$ =>
  action$.pipe(
    filter(purchase.started.match),
    mergeMap(action => {
      const price = action.payload?.bnbPrice;
      return from(
        price
          ? SimpleExchangeContract.sendBNB(
              'buyToken',
              formatSaleBalance('BNB', price),
              action.payload.middlewareMethods,
              action.payload.idNFT as number
            )
          : SimpleExchangeContract.sendWithMiddleware(
              'buyToken',
              action.payload.middlewareMethods,
              action.payload.idNFT as number
            )
      ).pipe(
        map(res => {
          return purchase.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError(error => of(purchase.failed({ params: action.payload, error: error })))
      );
    })
  );

const getProductEpic: Epic = action$ =>
  action$.pipe(
    filter(getProduct.started.match),
    mergeMap(action => {
      return from(axios.get(`${process.env.ADDRESS_API}/nft?id=${action.payload.id}&address=${action.payload.address}`)).pipe(
        map(res => {
          return getProduct.done({
            params: action.payload,
            result: res.data,
          });
        }),
        catchError(error => of(getProduct.failed({ params: action.payload, error: error })))
      );
    })
  );

export default combineEpics(approveBUSDEpic, approveCONTEpic, purchaseEpic, getProductEpic);
