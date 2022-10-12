import { GetProductListReq, GetProductListRes, Error } from 'store/explore';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('SEARCH');
export const searchNFTAction = actionCreator.async<GetProductListReq, GetProductListRes, Error>('SEARCH_NFT');
