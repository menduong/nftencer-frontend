import { actionCreatorFactory } from 'typescript-fsa';
import { GetProductListRes, GetProductListReq,GetProductListMRes, GetProductListMReq, Error, GetTotalVolumeReq,GetListTotalVolumeReq, GetTotalVolumeRes,GetListTotalVolumeRes } from 'store/explore';

const actionCreator = actionCreatorFactory('EXPLORE');
export const getProductList = actionCreator.async<GetProductListReq, GetProductListRes, Error>('GET_PRODUCT_LIST');
export const getProductListM = actionCreator.async<GetProductListMReq, GetProductListMRes, Error>('GET_PRODUCT_LISTM');
export const getTotalVolume = actionCreator.async<GetTotalVolumeReq, GetTotalVolumeRes, Error>('GET_TOTAL_VOLUME');
export const getListTotalVolume = actionCreator.async<GetListTotalVolumeReq, GetListTotalVolumeRes, Error>('GET_LIST_TOTAL_VOLUME');
