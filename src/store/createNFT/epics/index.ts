import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { createTokenURI,createTokenResellURI, createNFT, approveNFT, approveCreateNFT, sellNFT, sellCreateNFT,createTokenURI1155,getTokenCountURI1155,UploadJsonURI1155,createNFT1155} from 'store/createNFT';
import { State } from 'store';
import { NFTContract, SimpleExchangeContract,UserDefined_1155,NFTContract_1155 } from 'lib/smartContract';
import axios from 'axios';
import { CardType, CardTypeNum, formatSaleBalance } from 'util/formatBalance';
import { Unit } from 'components/pages/create/form';

const createURI_1155Epic: Epic = (action$, state$) =>
  action$.pipe(
    filter(createTokenURI1155.started.match),
    mergeMap(action => {
      const state: State = state$.value;
      console.log("pass 1")
      const values = action.payload.data || state.createNFT.newProduct;
      const address = state.common.account
      const data = new FormData();
      // data.append('title', values.name);
      // data.append('description', values.description || '');
      // data.append('instant_sale_price', `${values.instantsaleprice}`);
      data.append('image', values.file);
      data.append('retain_name', '');
      // data.append('retain_name', "");
      // data.append('quote_token', Unit[values.unit]);
      // data.append('creator', address);
      // data.append('quantity', '100');
      console.log("data",values)
      
      // values.categories?.map(cate => data.append('categories', cate.name.toLocaleLowerCase()));
      return from(
        axios.post(`${process.env.ADDRESS_API}/v1/upload`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      ).pipe(
        mergeMap(res => {
          return of(
            createTokenURI1155.done({
              params: action.payload,
              result: res.data,
            }),
            // createNFT1155.started({ })
            getTokenCountURI1155.started({parameter: action.payload,result:res.data})
            // createNFT.started({ tokenURI: res.data.id  })
          );
          
        }),
        catchError(error => of(createTokenURI.failed({ params: action.payload, error: error })))
      );
    })
  );

  const getTokenCountEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(getTokenCountURI1155.started.match),
    mergeMap(action => {
      const store: State = store$.value;
      const number = "1";
      var parts = [
        {image:"url",
         description: "hello world",
        },
       ];
      console.log("store.common.account",action)
      const fileJson = {
        "image" : "",
        "retain_name": ""
      }

      const jsn = JSON.stringify(parts);
      const blob12 = new Blob([jsn], { type: 'application/json' });
      const file12 = new File([ blob12 ], `${number}.json`);
      return from(
        UserDefined_1155.callFunc('getTokenCount')
      ).pipe(
        mergeMap(res => {
          return of(
            getTokenCountURI1155.done({
              params: action.payload,
              result: res,
            }),
            UploadJsonURI1155.started({ tokenCount: res, params: action.payload })
            // approveCreateNFT.started({ idNFT: res.events.Transfer.returnValues.tokenId })
          );
        }),
        catchError(error => {
          return of(createNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );


  const uploadJsonEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(UploadJsonURI1155.started.match),
    mergeMap(action => {
      const store: State = store$.value;
      const nameFile = Number(action.payload.tokenCount) + 1 ;
      const dataJson = new FormData();
      console.log("action123",action)
      console.log("store.common.account123",action.payload.params)
      console.log("tokencount123",action.payload.tokenCount)
    
      const parts = 
        {image: action.payload.params.result.url,
         description: action.payload.params.parameter.data.name,
        };
      console.log("parts",parts)
      console.log("nameFile",nameFile)
      const jsn = JSON.stringify(parts);
      const blob12 = new Blob([jsn], { type: 'application/json' });
      const fileJson = new File([ blob12 ], `${nameFile}.json`);
      const urltest  = window.URL.createObjectURL(blob12);
      dataJson.append('image', fileJson);
      dataJson.append('retain_name',  '');
      // var a = document.createElement("a");
      //  a.href = urltest;
      //  a.download = `${nameFile}.json`;
      //  a.click();
       
      console.log("file_Json",fileJson)
      return from(
        axios.post(`${process.env.ADDRESS_API}/v1/upload`, dataJson, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      ).pipe(
        mergeMap(res => {
          return of(
            UploadJsonURI1155.done({
              params: action.payload,
              result: res,
            }),
            createNFT1155.started ({})
            // approveCreateNFT.started({ idNFT: res.events.Transfer.returnValues.tokenId })
          );
        }),
        catchError(error => {
          return of(UploadJsonURI1155.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

  const createNFT1155Epic: Epic = (action$, store$) =>
  action$.pipe(
    filter(createNFT1155.started.match),
    mergeMap(action => {
      const store: State = store$.value;
      const quantity = 10;
      console.log("store.common.account 1155",action)
      console.log("store store 1155 ",store.common.account)
      console.log("step 2 1155")
      return from(
        UserDefined_1155.callMint('mint', store.common.account,quantity)
        // NFTContract.send('mint', store.common.account,quantity)
        // 0x76c10C68D3C7895bf1701FA0a07C083CA4158798 , 100
        // NFTContract.send('create', store.common.account, action.payload.tokenURI || store.createNFT.tokenURI)
      ).pipe(
        mergeMap(res => {
          return of(
            createNFT1155.done({
              params: action.payload,
              result: res,
            }),
       
            // approveCreateNFT.started({ idNFT: res.events.Transfer.returnValues.tokenId })
          );
        }),
        catchError(error => {
          return of(createNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );





//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
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
      // data.append('quantity', '100');
      console.log("step 1")
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

  const createNFTEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(createNFT.started.match),
    mergeMap(action => {
      const store: State = store$.value;
      const quantity = 10;
      console.log("store.common.account",action)
      console.log("store store",store)
      console.log("step 2")
      return from(
        // NFTContract_1155.send('mint', store.common.account,quantity)
        // NFTContract.send('mint', store.common.account,quantity)
        // 0x76c10C68D3C7895bf1701FA0a07C083CA4158798 , 100
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

export default combineEpics(createResellURIEpic,createURIEpic, createNFTEpic, approveNFTEpic, approveCreateNFTEpic, sellNFTEpic, sellCreateNFTEpic,
  createURI_1155Epic, getTokenCountEpic,uploadJsonEpic,createNFT1155Epic
  );
