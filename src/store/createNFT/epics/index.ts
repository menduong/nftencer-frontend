import { Epic, combineEpics } from "redux-observable";
import { from, of } from "rxjs";
import { map, mergeMap, catchError, filter } from "rxjs/operators";
import {
  createTokenURI,
  createTokenResellURI,
  createNFT,
  approveNFT,
  approveCreateNFT,
  sellNFT,
  sellCreateNFT,
  createTokenURI1155,
  getTokenCountURI1155,
  createURI1155,
  createNFT1155,
} from "store/createNFT";
import { State } from "store";
import {
  NFTContract,
  SimpleExchangeContract,
  UserDefined_1155,
  NFTContract_1155,
} from "lib/smartContract";
import axios from "axios";
import { CardType, CardTypeNum, formatSaleBalance } from "util/formatBalance";
import { Unit } from "components/pages/create/form";


/////1155
const createTokenURI_1155Epic: Epic = (action$, state$) =>
  action$.pipe(
    filter(createTokenURI1155.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      console.log("pass 1");
      const values = action.payload.data || state.createNFT.newProduct;
      const address = state.common.account;
      const data = new FormData();
      // data.append('title', values.name);
      // data.append('description', values.description || '');
      // data.append('instant_sale_price', `${values.instantsaleprice}`);
      data.append("image", values.file);
      // data.append('retain_name', "");
      // data.append('quote_token', Unit[values.unit]);
      // data.append('creator', address);
      // data.append('quantity', '100');
      console.log("data", data);

      // values.categories?.map(cate => data.append('categories', cate.name.toLocaleLowerCase()));
      return from(
        axios.post(`${process.env.ADDRESS_API}/v1/upload`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).pipe(
        mergeMap((res) => {
          return of(
            createTokenURI1155.done({
              params: action.payload,
              result: res.data,
            }),
            //console.log(res)
            // createURI1155.started({ URI: res.data.url})
            getTokenCountURI1155.started({ URI: res.data.url })
            // createNFT.started({ tokenURI: res.data.id  })
          );
        }),
        catchError((error) =>
          of(
            createTokenURI1155.failed({ params: action.payload, error: error })
          )
        )
      );
    })
  );
  const getTokenCountEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(getTokenCountURI1155.started.match),
    mergeMap((action) => {
      const store: State = store$.value;
      console.log("store.common.account", action);
      const fileJson = {
        image: "",
        retain_name: "",
      };

      return from(UserDefined_1155.callFunc("getTokenCount")).pipe(
        mergeMap((res) => {
          return of(
            getTokenCountURI1155.done({
              params: action.payload,
              result: res,
            }),
            //console.log(res)
            createURI1155.started({ URI: action.payload.URI, tokenID: res })
            // approveCreateNFT.started({ idNFT: res.events.Transfer.returnValues.tokenId })
          );
        }),
        catchError((error) => {
          return of(
            getTokenCountURI1155.failed({
              params: action.payload,
              error: error,
            })
          );
        })
      );
    })
  );
const createURI_1155Epic: Epic = (action$, state$) =>
  action$.pipe(
    filter(createURI1155.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      console.log("pass 1");
      const values = action.payload.data || state.createNFT.newProduct;
      const address = state.common.account;
      const data = new FormData();
      let strCount = [];

      const tokenUriTemp = action.payload.tokenID.toString();
      const NamefileDec = parseInt(action.payload.tokenID) + 1;
      const NamefileHec = NamefileDec.toString(16) + ".json";
      const tokenlength = 64 - NamefileDec.toString(16).length;
      for (let i = 0; i < tokenlength; i++) {
        strCount.push("0");
      }
      const fileName = strCount.join("") + NamefileHec;
      const json = {
        Video: action.payload.URI,
        description: values.description,
        title :values.name,
        categories : values.categories,
        Royalties :parseInt(values.Royalties) 
      };
     
      console.log(fileName);
      console.log(strCount)
     
      const file = new File([JSON.stringify(json)], fileName, {
        type: "application/json",
      });
      console.log(file)
      data.append("image", file);
      data.append("retain_name", "true");
      console.log("data", action.payload);
      console.log("data", state);

      // values.categories?.map(cate => data.append('categories', cate.name.toLocaleLowerCase()));
      return from(
        axios.post(`${process.env.ADDRESS_API}/v1/upload`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).pipe(
        mergeMap((res) => {
          return of(
            createURI1155.done({
              params: action.payload,
              result: res.data,
            }),
            // console.log("dsd", res)
            createNFT1155.started({ tokenURI: res.data.url })
            // getTokenCountURI1155.started({})
            // createNFT.started({ tokenURI: res.data.id  })
          );
        }),
        catchError((error) =>
          of(createURI1155.failed({ params: action.payload, error: error }))
        )
      );
    })
  );

const createNFT_1155Epic: Epic = (action$, store$) =>
  action$.pipe(
    filter(createNFT1155.started.match),
    mergeMap((action) => {
      const store: State = store$.value;
      const values = store.createNFT.newProduct;
      const quantity = 10;
      console.log("store.common.account", action);
      console.log("store store", store);
      console.log("step 2", values);
      const Royalties = parseInt(values.Royalties) *100;
      return from(
        UserDefined_1155.send("mint", store.common.account, values?.numbercopy,Royalties)
        // NFTContract.send('mint', store.common.account,quantity)
        // 0xe8bb5b310c7f7B15AF4a752fD35C3d5728FD61f1 , 100
        // NFTContract.send('create', store.common.account, action.payload.tokenURI || store.createNFT.tokenURI)
      ).pipe(
        map((res) => {
          return createNFT1155.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError((error) => {
          return of(createNFT1155.failed({ params: action.payload, error: error }));
        })
      
      );
    })
  );

///721
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const createURIEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(createTokenURI.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      const values = action.payload.data || state.createNFT.newProduct;
      const address = state.common.account;
      const data = new FormData();
      data.append("title", values.name);
      data.append("description", values.description || "");
      data.append("instant_sale_price", `${values.instantsaleprice}`);
      data.append("upload_file", values.file);
      data.append("quote_token", Unit[values.unit]);
      data.append("creator", address);
      // data.append('quantity', '100');
      console.log("step 1");
      values.categories?.map((cate) =>
        data.append("categories", cate.name.toLocaleLowerCase())
      );
      return from(
        axios.post(`${process.env.ADDRESS_API}/nft`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      ).pipe(
        mergeMap((res) => {
          return of(
            createTokenURI.done({
              params: action.payload,
              result: res.data,
            }),
            createNFT.started({ tokenURI: res.data.id })
          );
        }),
        catchError((error) =>
          of(createTokenURI.failed({ params: action.payload, error: error }))
        )
      );
    })
  );
 
const createNFTEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(createNFT.started.match),
    mergeMap((action) => {
      const store: State = store$.value;
      const quantity = 10;
      console.log("store.common.account", action);
      console.log("store store", store);
      console.log("step 2");
      return from(
        // NFTContract_1155.send('mint', store.common.account,quantity)
        // NFTContract.send('mint', store.common.account,quantity)
        // 0x76c10C68D3C7895bf1701FA0a07C083CA4158798 , 100
        NFTContract.send(
          "create",
          store.common.account,
          action.payload.tokenURI || store.createNFT.tokenURI
        )
      ).pipe(
        mergeMap((res) => {
          return of(
            createNFT.done({
              params: action.payload,
              result: res,
            }),

            approveCreateNFT.started({
              idNFT: res.events.Transfer.returnValues.tokenId,
            })
          );
        }),
        catchError((error) => {
          return of(createNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

const approveCreateNFTEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(approveCreateNFT.started.match),
    mergeMap((action) => {
      const store: State = store$.value;
      return from(
        NFTContract.send(
          "approve",
          process.env.SIMPLE_EXCHANGE_ADDRESS,
          action.payload.idNFT || store.createNFT.idNFT
        )
      ).pipe(
        mergeMap((res) => {
          return of(
            approveCreateNFT.done({
              params: action.payload,
              result: res,
            }),
            sellCreateNFT.started({})
          );
        }),
        catchError((error) =>
          of(approveNFT.failed({ params: action.payload, error: error }))
        )
      );
    })
  );
const sellCreateNFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(sellCreateNFT.started.match),
    mergeMap((action) => {
      const store: State = state$.value;
      const price = store.createNFT.newProduct.instantsaleprice;
      const unit = store.createNFT.newProduct.unit as CardTypeNum | CardType;
      return from(
        SimpleExchangeContract.send(
          "sellToken",
          store.createNFT.idNFT as number,
          {
            price: BigInt(formatSaleBalance(unit, price)).toString(),
            token: unit,
          }
        )
      ).pipe(
        map((res) => {
          return sellNFT.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError((error) => {
          return of(sellNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

const createResellURIEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(createTokenResellURI.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      const values = action.payload.datas || state.createNFT.newProduct;
      const address = state.common.account;
      const data = new FormData();
      data.append("instant_sale_price", `${values.instantsaleprice}`);
      data.append("quote_token", Unit[values.unit]);
      data.append("creator", address);
      return from(
        axios.put(
          `${process.env.ADDRESS_API}/nft?collectible_id=${
            action.payload.uid
          }&account=${address}&quote_token=${
            Unit[values.unit]
          }&instant_sale_price=${values.instantsaleprice}`
        )
      ).pipe(
        mergeMap((res) => {
          return of(
            createTokenResellURI.done({
              params: action.payload,
              result: res.data,
            }),
            approveNFT.started({
              idNFT: action.payload.tokenid,
              price: values.instantsaleprice,
              unit: values.unit,
            })
          );
        }),
        catchError((error) =>
          of(
            createTokenResellURI.failed({
              params: action.payload,
              error: error,
            })
          )
        )
      );
    })
  );

const approveNFTEpic: Epic = (action$, store$) =>
  action$.pipe(
    filter(approveNFT.started.match),
    mergeMap((action) => {
      const store: State = store$.value;
      return from(
        NFTContract.send(
          "approve",
          process.env.SIMPLE_EXCHANGE_ADDRESS,
          action.payload.idNFT || store.createNFT.idNFT
        )
      ).pipe(
        mergeMap((res) => {
          return of(
            approveNFT.done({
              params: action.payload,
              result: res,
            }),
            sellNFT.started({
              tokenid: action.payload.idNFT,
              priceSell: action.payload.price,
              unit: action.payload.unit,
            })
          );
        }),
        catchError((error) =>
          of(approveNFT.failed({ params: action.payload, error: error }))
        )
      );
    })
  );

const sellNFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(sellNFT.started.match),
    mergeMap((action) => {
      const store: State = state$.value;
      const price = action.payload.priceSell;
      const unit = action.payload.unit;
      return from(
        SimpleExchangeContract.send(
          "sellToken",
          action.payload.tokenid as number,
          {
            price: BigInt(formatSaleBalance(unit, price)).toString(),
            token: unit,
          }
        )
      ).pipe(
        map((res) => {
          return sellNFT.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError((error) => {
          return of(sellNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

////MyNFTStorage

export default combineEpics(
  createResellURIEpic,
  createURIEpic,
  createNFTEpic,
  approveNFTEpic,
  approveCreateNFTEpic,
  sellNFTEpic,
  sellCreateNFTEpic,
  createTokenURI_1155Epic,
  getTokenCountEpic,
  createURI_1155Epic,
  createNFT_1155Epic
);
