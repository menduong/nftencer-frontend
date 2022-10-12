/* eslint-disable @typescript-eslint/no-explicit-any */
import { actionCreatorFactory } from 'typescript-fsa';
import { ApproveReq, Error, PurchaseReq, GetProductReq, GetProductRes,ModalReq ,ModalLang} from 'store/buyNFT';

const actionCreator = actionCreatorFactory('BUY_NFT');

export const approveBUSD = actionCreator.async<ApproveReq, any, Error>('APPROVE_BUSD_URL');
export const approveCONT = actionCreator.async<ApproveReq, any, Error>('APPROVE_CONT_URL');

export const purchase = actionCreator.async<PurchaseReq, any, Error>('PURCHASE_NFT');
export const refreshLang = actionCreator.async<ModalLang, any, Error>('REFRESH_LANG');
export const modalpurchase = actionCreator.async<ModalReq, any, Error>('MODAL_PURCHASE_NFT');
export const getProduct = actionCreator.async<GetProductReq, GetProductRes, Error>('GET_PRODUCT');

export const closeModal = actionCreator('CLOSE_MODAL');
export const closeModalIn = actionCreator('CLOSE_MODAL_IN');
export const closeModalMaint = actionCreator('CLOSE_MODAL_MAINT');
export const openModal = actionCreator('OPEN_MODAL');
export const openModalIn = actionCreator('OPEN_MODAL_IN');
export const openModalMaint = actionCreator('OPEN_MODAL_MAINT');
export const refreshnoti = actionCreator('REFRESH_NOTI');
export const switchKR = actionCreator('SWITCHKR');
export const switchEN = actionCreator('SWITCHEN');
export const trigger = actionCreator('TRIGGER');
export const videoMute = actionCreator('VIDEO_MUTE');
export const videoUnmute = actionCreator('VIDEO_UNMUTE');
