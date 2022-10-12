import { actionCreatorFactory } from 'typescript-fsa';
import { GetBalanceReq, GetBalanceRes, Error } from 'store/getBalance';

const actionCreator = actionCreatorFactory('GET_BALANCE');
export const getBUSD = actionCreator.async<GetBalanceReq, GetBalanceRes, Error>('GET_BUSD');
export const getCONT = actionCreator.async<GetBalanceReq, GetBalanceRes, Error>('GET_CONT');
