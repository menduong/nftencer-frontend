import { actionCreatorFactory } from 'typescript-fsa';
import {
  CreateURIReq,
  CreateURIRes,
  CreateURI1155Req, //// 1155
  CreateURI1155Res, ////  1155
  CreateDataURIReq,
  CreateDataURIRes,
  CreateNFTRes,
  CreateNFTReq,
  ApproveReq,
  ApproveRes,
  ApproveCreateReq,
  ApproveCreateRes,
  SellCreateNFTReq,
  SellCreateNFTRes,
  SellNFTReq,
  SellNFTRes,
  Error,
  ReSellNFTReq,
  ReSellNFTRes,
} from "store/createNFT";

const actionCreator = actionCreatorFactory("CREATE_AND_SELL_NFT");
export const resetStore = actionCreator("RESET_START");
export const createTokenURI =
  actionCreator.async<CreateURIReq, CreateURIRes, Error>("CREATE_TOKEN_URL");
export const createTokenResellURI = actionCreator.async<
  CreateDataURIReq,
  CreateDataURIRes,
  Error
>("CREATE_TOKEN_URL_RESELL");
export const createNFT =
  actionCreator.async<CreateNFTReq, CreateNFTRes, Error>("CREATE_NFT");
export const approveNFT =
  actionCreator.async<ApproveReq, ApproveRes, Error>("APROVE_NFT");
export const approveCreateNFT =
  actionCreator.async<ApproveCreateReq, ApproveCreateRes, Error>(
    "APROVE_CREATE_NFT"
  );
export const sellNFT =
  actionCreator.async<SellNFTReq, SellNFTRes, Error>("SELL_NFT");
export const sellCreateNFT =
  actionCreator.async<SellCreateNFTReq, SellCreateNFTRes, Error>(
    "SELL_CREATE_NFT"
  );

////////////// 1155 ////////////
export const createTokenURI1155 = actionCreator.async<
  CreateURI1155Req,
  CreateURI1155Res,
  Error
>("CREATE_TOKEN_URL_1155");

export const getTokenCountURI1155 = actionCreator.async<
  CreateURI1155Req,
  CreateURI1155Res,
  Error
>("GET_TOKEN_COUNT_1155");
export const createURI1155 =
  actionCreator.async<CreateURI1155Req, CreateURI1155Res, Error>(
    "CREATE_URL_1155"
  );
export const createNFT1155 =
  actionCreator.async<CreateNFTReq, CreateNFTRes, Error>("CREATE_NFT_1155");


