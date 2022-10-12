export type Product = {
  id: string;
  title: string;
  description: string;
  upload_file: string;
  royalty_percent: number;
  unlock_once_purchased: boolean;
  instant_sale_price: number;
  categories: any;
  properties: any;
  token: string;
  collectible: string;
  token_id: number;
  token_owner: string;
  like:any;
  creator:string;
  view:number;
  owner:string;
  creator_acc:string;
  quote_token: {
  name: string;
  };
};

export type Error = any;
export type GetProductListReq = {
  mode?: 'refresh';
  cursor?: string;
  limit?: number;
  filterAndSort?: string | null;
  category?: string | null;
  title?: string;
  address?: any;
  options?:any;
};

export type GetProductListRes = {
  collectibles: Product[];
  trend: Product[];
  prev_cursor: string;
  next_cursor: string;
  addressid: any;
};

export type GetProductListMReq = {
  mode?: 'refresh';
  cursor?: string;
  limit?: number;
  filterAndSort?: string | null;
  options?: string | null;
  title?: string;
  address?: string;
  category?: string | null;
};

export type GetProductListMRes = {
  collectibles: Product[];
  prev_cursor: string;
  next_cursor: string;
};

export type GetTotalVolumeReq = {
  unit: number;
};

export type GetTotalVolumeRes = {
  total_sold: string;
};


export type GetListTotalVolumeReq = {
  unit: any;
};
export type GetListTotalVolumeRes = {
  total_sold?: any[];
};
export const LIMIT_PER_PAGE = 2;
