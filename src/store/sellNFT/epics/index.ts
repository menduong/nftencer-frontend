import { Epic, combineEpics } from "redux-observable";
import { from, of } from "rxjs";
import { map, mergeMap, catchError, filter } from "rxjs/operators";
import { resellNFT, ApprovesellNFT, CreateNFT } from "store/sellNFT";
import { State } from "store";
import {
  NFTContract_StorageAddrress,
  UserDefined_1155,
} from "lib/smartContract";
import axios from "axios";
const { ethers } = require("ethers");

const UUID = require("uuid-int");
const id = 0;
const generator = UUID(id);
const uuidTransaction = generator.uuid();
////MyNFTStorage
const CreateNFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(CreateNFT.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      const values = action.payload.data || state.sellNFT.newProduct;
      const price = values.tokenPrice * values.quantity;
      let categories = "";
      values.categories?.map(
        (cate) => (categories += "&categories=" + cate.name.toLocaleLowerCase())
      );
      console.log("step1", categories);
      return from(
        axios.post(`${process.env.ADDRESS_API}/nft1155?unlock_once_purchased=0&instant_sale_price=${price}&royalty_percent=${values.Royalties}&title=${values.title}&description=${values.description}
        &upload_file=${values.upload_file}&erc_type=${values.contract_type}&creator=${values.account}&token_payment=${values.tokenPayment}&token_quantity=${values.quantity}&uuid_transaction=${values.quantity}${categories}`)
      ).pipe(
        mergeMap((res) => {
          return of(
            CreateNFT.done({
              params: action.payload,
              result: res.data,
            }),
            ApprovesellNFT.started({})
          );
        }),
        catchError((error) => of(console.log(error)))
      );
    })
  );
const Aprrove_NFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(ApprovesellNFT.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      const values = action.payload.data || state.sellNFT.newProduct;
      console.log("step2", values);
      // values.categories?.map(cate => data.append('categories', cate.name.toLocaleLowerCase()));
      return from(
        UserDefined_1155.AprroveSell(
          "setApprovalForAll",
          values.account,
          process.env.NFT_STORAGE_ADDRESS,
          true
        )
      ).pipe(
        mergeMap((res) => {
          return of(
            ApprovesellNFT.done({
              params: action.payload,
              result: res.data,
            }),
            resellNFT.started({})
          );
        }),
        catchError((error) => of(console.log(error)))
      );
    })
  );
const createOder_NFTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(resellNFT.started.match),
    mergeMap((action) => {
      const state: State = state$.value;
      console.log("pass 1");
      const values = action.payload.data || state.sellNFT.newProduct;

      const price = ethers.utils.parseEther(values.tokenPrice.toString());
      console.log("state", state);
      console.log("action", action);
      console.log("action", values);
      return from(
        NFTContract_StorageAddrress.callStoreAge(
          "createOrder",
          values.nftAddress,
          values.tokenId,
          price,
          values.quantity,
          values.tokenPayment,
          uuidTransaction
        )
      ).pipe(
        map((res) => {
          return resellNFT.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError((error) => {
          return of(resellNFT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );
export default combineEpics(createOder_NFTEpic, Aprrove_NFTEpic, CreateNFTEpic);
