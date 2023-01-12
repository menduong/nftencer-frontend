import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import {
  purchase,
  approveBUSD,
  getProduct,
  approveCONT,
  ApproveBuyNFT,
  getOrder,
} from "store/buyNFT";
import {
  BUSDContract,
  CONTContract,
  SimpleExchangeContract,
  NFTContract_StorageAddrress,
  UserDefined_1155,
} from "lib/smartContract";
import axios from "axios";
import { formatSaleBalance } from "util/formatBalance";
const { ethers } = require("ethers");

const approveBUSDEpic: Epic = (action$) =>
  action$.pipe(
    filter(approveBUSD.started.match),
    mergeMap((action) => {
      const price = action.payload.price;
      return from(
        BUSDContract.sendWithMiddleware(
          "increaseAllowance",
          action.payload.middlewareMethods,
          process.env.SIMPLE_EXCHANGE_ADDRESS,
          formatSaleBalance("BUSD", price).toString()
        )
      ).pipe(
        map((res) => {
          return purchase.started({
            idNFT: action.payload.idNFT,
            bnbPrice: undefined,
            middlewareMethods: action.payload.middlewareMethods,
          });
        }),
        catchError((error) =>
          of(approveBUSD.failed({ params: action.payload, error: error }))
        )
      );
    })
  );

const approveCONTEpic: Epic = (action$) =>
  action$.pipe(
    filter(approveCONT.started.match),
    mergeMap((action) => {
      const price = action.payload.price;
      return from(
        CONTContract.sendWithMiddleware(
          "increaseAllowance",
          action.payload.middlewareMethods,
          process.env.SIMPLE_EXCHANGE_ADDRESS,
          formatSaleBalance("CONUT", price).toString()
        )
      ).pipe(
        map((res) => {
          return purchase.started({
            idNFT: action.payload.idNFT,
            bnbPrice: undefined,
            middlewareMethods: action.payload.middlewareMethods,
            erc_type: null,
          });
        }),
        catchError((error) =>
          of(approveCONT.failed({ params: action.payload, error: error }))
        )
      );
    })
  );

const purchaseEpic: Epic = (action$) =>
  action$.pipe(
    filter(purchase.started.match),
    mergeMap((action) => {
      const price = action.payload?.bnbPrice;
      const erc_type = action.payload?.erc_type;
      console.log(price);
      console.log("buy", action.payload);
      return from(
        price
          ? SimpleExchangeContract.sendBNB(
              "buyToken",
              formatSaleBalance("BNB", price),
              action.payload.middlewareMethods,
              action.payload.idNFT as number
            )
          : erc_type
          ? NFTContract_StorageAddrress.BuyOrder1155(
              "buyOrder",
              action.payload.idNFT as number
            )
          : SimpleExchangeContract.sendWithMiddleware(
              "buyToken",
              action.payload.middlewareMethods,
              action.payload.idNFT as number
            )
      ).pipe(
        map((res) => {
          return purchase.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError(
          async (error) => console.log("error Buy", error)
          //of(purchase.failed({ params: action.payload, error: error }))
        )
      );
    })
  );

const getProductEpic: Epic = (action$) =>
  action$.pipe(
    filter(getProduct.started.match),
    mergeMap((action) => {
      return from(
        axios.get(
          `${process.env.ADDRESS_API}/nft?id=${action.payload.id}&address=${action.payload.address}`
        )
      ).pipe(
        map((res) => {
          return getProduct.done({
            params: action.payload,
            result: res.data,
          });
        }),
        catchError((error) =>
          of(getProduct.failed({ params: action.payload, error: error }))
        )
      );
    })
  );

const AprroveBuy_NFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(ApproveBuyNFT.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      const idNFT = action.payload.idNFT;
      const account = action.payload.account;
      const price = ethers.utils.parseEther(action.payload.price.toString());
      console.log("ApprovesellNFT", idNFT);
      console.log("ApprovesellNFT", account);
      console.log("ApprovesellNFT", price);
      // values.categories?.map(cate => data.append('categories', cate.name.toLocaleLowerCase()));
      return from(
        CONTContract.AprroveBuy(
          "approve",
          account,
          process.env.NFT_STORAGE_ADDRESS,
          price
        )
      ).pipe(
        mergeMap((res) => {
          return of(
            ApproveBuyNFT.done({
              params: action.payload,
              result: res.data,
            }),
            purchase.started({
              idNFT: action.payload.idNFT,
              bnbPrice: undefined,
              middlewareMethods: action.payload.middlewareMethods,
              erc_type: action.payload.erc_type,
            })
          );
        }),
        catchError((error) => of(console.log(error)))
      );
    })
  );

export default combineEpics(
  approveBUSDEpic,
  approveCONTEpic,
  purchaseEpic,
  getProductEpic,
  AprroveBuy_NFTEpic
);
