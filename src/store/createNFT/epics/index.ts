import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { createTokenURI,createTokenResellURI, createNFT, approveNFT, approveCreateNFT, sellNFT, sellCreateNFT } from 'store/createNFT';
import { State } from 'store';
import { NFTContract, SimpleExchangeContract } from 'lib/smartContract';
import axios from 'axios';
import { CardType, CardTypeNum, formatSaleBalance } from 'util/formatBalance';
import { Unit } from 'components/pages/create/form';

const createURIEpic: Epic = (action$, state$) =>

  action$.pipe(
    
    filter(createTokenURI.started.match),
    mergeMap(action => {
      const state: State = state$.value;
      const values = action.payload.data || state.createNFT.newProduct;
      const address = state.common.account
      const data = new FormData();
      data.append('title', values.name);
      data.append('description', values.description || '');
      data.append('instant_sale_price', `${values.instantsaleprice}`);
      data.append('upload_file', values.file);
      data.append('quote_token', Unit[values.unit]);
      data.append('creator', address);
      values.categories?.map(cate => data.append('categories', cate.name.toLocaleLowerCase()));
      return from(
        axios.post(`${process.env.ADDRESS_API}/nft`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      ).pipe(
        mergeMap(res => {
          return of(
            createTokenURI.done({
              params: action.payload,
              result: res.data,
            }),
            createNFT.started({ tokenURI: res.data.id })
          );
          
        }),
        catchError(error => of(createTokenURI.failed({ params: action.payload, error: error })))
      );
    })
  );

  const createResellURIEpic: Epic = (action$, state$) =>

  action$.pipe(
    
    filter(createTokenResellURI.started.match),
    mergeMap(action => {
      const state: State = state$.value;
      const values = action.payload.datas || state.createNFT.newProduct;
      const address = state.common.account
      const data = new FormData();
      data.append('instant_sale_price', `${values.instantsaleprice}`);
      data.append('quote_token', Unit[values.unit]);
      data.append('creator', address);
      return from(
        axios.put(`${process.env.ADDRESS_API}/nft?collectible_id=${action.payload.uid}&account=${address}&quote_token=${Unit[values.unit]}&instant_sale_price=${values.instantsaleprice}`)
      ).pipe(
        mergeMap(res => {
          return of(
            createTokenResellURI.done({
              params: action.payload,
              result: res.data,
            }),
            approveNFT.started({ idNFT: action.payload.tokenid, price: values.instantsaleprice, unit : values.unit })
          );
          
        }),
        
        catchError(error => of(createTokenResellURI.failed({ params: action.payload, error: error })))
      );
    })
  );


const createNFTEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(createNFT.started.match),
    mergeMap(action => {
      const store: State = store$.value;
      return from(
        NFTContract.send('create', store.common.account, action.payload.tokenURI || store.createNFT.tokenURI)
      ).pipe(
        mergeMap(res => {
          return of(
            createNFT.done({
              params: action.payload,
              result: res,
            }),
       
            approveCreateNFT.started({ idNFT: res.events.Transfer.returnValues.tokenId })
          );
        }),
        catchError(error => {
          return of(createNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

const approveNFTEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(approveNFT.started.match),
    mergeMap(action => {
      const store: State = store$.value;
      return from(
        NFTContract.send('approve', process.env.SIMPLE_EXCHANGE_ADDRESS, action.payload.idNFT || store.createNFT.idNFT)
      ).pipe(
        mergeMap(res => {
          return of(
            approveNFT.done({
              params: action.payload,
              result: res,
            }),
            sellNFT.started({ tokenid: action.payload.idNFT,priceSell:action.payload.price, unit:action.payload.unit })
          );
        }),
        catchError(error => of(approveNFT.failed({ params: action.payload, error: error })))
      );
    })
  );

  const approveCreateNFTEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(approveCreateNFT.started.match),
    mergeMap(action => {
      const store: State = store$.value;
      return from(
        NFTContract.send('approve', process.env.SIMPLE_EXCHANGE_ADDRESS, action.payload.idNFT || store.createNFT.idNFT)
      ).pipe(
        mergeMap(res => {
          return of(
            approveCreateNFT.done({
              params: action.payload,
              result: res,
            }),
            sellCreateNFT.started({})
          );
        }),
        catchError(error => of(approveNFT.failed({ params: action.payload, error: error })))
      );
    })
  );
  const sellCreateNFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(sellCreateNFT.started.match),
    mergeMap(action => {
      const store: State = state$.value;
      const price = store.createNFT.newProduct.instantsaleprice;
      const unit = store.createNFT.newProduct.unit as CardTypeNum | CardType;
      return from(
        SimpleExchangeContract.send('sellToken', store.createNFT.idNFT as number, {
          price: BigInt(formatSaleBalance(unit, price)).toString(),
          token: unit,
        })
      ).pipe(
        map(res => {
          return sellNFT.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError(error => {
          return of(sellNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

const sellNFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(sellNFT.started.match),
    mergeMap(action => {
      const store: State = state$.value;
      const price = action.payload.priceSell;
      const unit = action.payload.unit;
      return from(
        SimpleExchangeContract.send('sellToken', action.payload.tokenid as number, {
          price: BigInt(formatSaleBalance(unit, price)).toString(),
          token: unit,
          
        })
      ).pipe(
        map(res => {
          return sellNFT.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError(error => {
          return of(sellNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

export default combineEpics(createResellURIEpic,createURIEpic, createNFTEpic, approveNFTEpic, approveCreateNFTEpic, sellNFTEpic, sellCreateNFTEpic);
