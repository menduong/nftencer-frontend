import { CreateForm,CreateFormData } from 'components/pages/create/form';
import { AnyArray } from 'immer/dist/internal';

export type CreateURIReq = { data?: CreateForm };
export type CreateDataURIReq = { datas?: CreateFormData,uid?:any ,tokenid?:any };

export type CreateURIRes = any;
export type CreateDataURIRes = any;

export type CreateNFTReq = { tokenURI?: string };

export type CreateNFTRes = any;

export type ApproveReq = {
  idNFT?: number;
  price?: number;
  data?: CreateForm ;
  unit?: number | any;
};

export type ApproveRes = any;

export type ApproveCreateReq = {
  idNFT?: number;
};

export type ApproveCreateRes = any;

export type SellNFTReq = {tokenid?:any,priceSell?:any, unit?:any};

export type SellNFTRes = any;

export type SellCreateNFTReq = {};

export type SellCreateNFTRes = any;

export type Error = any;
