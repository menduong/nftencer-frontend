import { actionCreatorFactory } from 'typescript-fsa';
import {
  CreateURIReq,
  CreateURIRes,
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
} from 'store/createNFT';

const actionCreator = actionCreatorFactory('CREATE_AND_SELL_NFT');
export const resetStore = actionCreator('RESET_START');
export const createTokenURI = actionCreator.async<CreateURIReq, CreateURIRes, Error>('CREATE_TOKEN_URL');
export const createTokenResellURI = actionCreator.async<CreateDataURIReq, CreateDataURIRes, Error>('CREATE_TOKEN_URL_RESELL');
export const createNFT = actionCreator.async<CreateNFTReq, CreateNFTRes, Error>('CREATE_NFT');
export const approveNFT = actionCreator.async<ApproveReq, ApproveRes, Error>('APROVE_NFT');
export const approveCreateNFT = actionCreator.async<ApproveCreateReq, ApproveCreateRes, Error>('APROVE_CREATE_NFT');
export const sellNFT = actionCreator.async<SellNFTReq, SellNFTRes, Error>('SELL_NFT');
export const sellCreateNFT = actionCreator.async<SellCreateNFTReq, SellCreateNFTRes, Error>('SELL_CREATE_NFT');
