import { MiddlewareMethods } from 'lib/smartContract';
import { Product } from 'store/explore';

export type Error = any;

export type ApproveReq = {
  price: number;
  idNFT: number;
  bnbPrice: undefined;
  middlewareMethods: MiddlewareMethods;
};

export type PurchaseReq = {
  idNFT: number;
  bnbPrice?: number; //IF BUY BY BNB
  middlewareMethods: MiddlewareMethods;
};
export type ModalReq = {
  price: number;
  tokenid:number;
  quote_token:any;
  tokenOwner:any;
  unlockOncePurchased:any;
  active:any;
  id: any;
};
export type ModalLang = {
  lang:any;
};

export type GetProductReq = {
  id: string;
  address?: string | any;
};

export type GetProductRes = Omit<Product, 'quote_token'> & {
  quote_token: string;
  owner:string;
};
