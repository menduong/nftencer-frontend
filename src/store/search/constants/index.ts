import { Product } from 'store/explore';

export type Error = any;
export type SearchReq = {
  name: string;
  limit?: number;
};
export type SearchRes = Product[];
