import produce from 'immer';
import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import {
  approveBUSD,
  approveCONT,
  closeModal,
  getProduct,
  purchase,
  GetProductRes,
  openModal,
  openModalIn,
  closeModalIn,
  modalpurchase,
  videoMute,
  trigger,
  videoUnmute,
  refreshnoti,
  refreshLang,
  switchKR,
  switchEN,
  closeSidebar,
  openSidebar,
  ApproveBuyNFT,
  getOrder
} from "store/buyNFT";
import { DRAFTABLE } from "immer/dist/internal";
import { approveCreateNFT } from "store/createNFT";
import { StepIcon } from "components/molecules/stepItem";

type BuyNFT = {
  isApproved: boolean;
  isOpen: boolean;
  isRefresh?: boolean;
  isRefreshLang?: boolean;
  isTrigger?: boolean;
  isKR?: boolean;
  isSidebar?: boolean;
  isMaint?: boolean;
  isSuccess: boolean;
  isGetDone: boolean;
  isMute: boolean;
  isCancel: boolean;
  product?: GetProductRes;
  pricePur?: any;
  idCheck?: any;
  tokenOwner?: any;
  active?: boolean;
  tokenid?: any;
  quote_token?: any;
  lang?: any;
  unlock_once_purchased?: any;
  currentStep: {
    number: number;
    status: StepIcon | "loading";
  };
};

const initialValue: BuyNFT = {
  isTrigger: false,
  isRefresh: false,
  isSidebar: true,
  isRefreshLang: false,
  isApproved: false,
  isSuccess: false,
  isGetDone: false,
  isMute: true,
  isOpen: false,
  isCancel: false,
  currentStep: { number: -1, status: "loading" },
};

const reducer: Reducer<BuyNFT> = (state = initialValue, action) => {
  if (isType(action, purchase.done)) {
    return produce(state, (draft) => {
      console.log("Success");
      draft.isSuccess = true;
      draft.isCancel = true;
    });
  }

  if (
    isType(action, approveBUSD.done) ||
    isType(action, approveCONT.done) ||
    isType(action, ApproveBuyNFT.done) ||
    isType(action, getOrder.done)
  ) {
    return produce(state, (draft) => {
      draft.isApproved = true;
    });
  }

  if (isType(action, openSidebar)) {
    return produce(state, (draft) => {
      draft.isSidebar = !draft.isSidebar;
    });
  }
  if (isType(action, openModal)) {
    return produce(state, (draft) => {
      draft.isApproved = true;
    });
  }
  if (isType(action, openModalIn)) {
    return produce(state, (draft) => {
      draft.isOpen = true;
    });
  }
  if (isType(action, openModalIn)) {
    return produce(state, (draft) => {
      draft.isMaint = true;
    });
  }
  if (isType(action, switchKR)) {
    return produce(state, (draft) => {
      draft.isKR = true;
    });
  }
  if (isType(action, switchEN)) {
    return produce(state, (draft) => {
      draft.isKR = false;
    });
  }
  if (isType(action, trigger)) {
    return produce(state, (draft) => {
      draft.isTrigger = true;
    });
  }
  if (isType(action, refreshnoti)) {
    return produce(state, (draft) => {
      draft.isRefresh = !draft.isRefresh;
    });
  }
  if (isType(action, refreshLang.started)) {
    return produce(state, (draft) => {
      draft.isRefreshLang = action.payload.lang;
    });
  }
  if (isType(action, videoMute)) {
    return produce(state, (draft) => {
      draft.isMute = true;
    });
  }
  if (isType(action, videoUnmute)) {
    return produce(state, (draft) => {
      draft.isMute = false;
    });
  }

  if (isType(action, modalpurchase.started)) {
    return produce(state, (draft) => {
      draft.active = action.payload.active;
      draft.idCheck = action.payload.id;
      draft.pricePur = action.payload.price;
      draft.tokenid = action.payload.tokenid;
      draft.tokenOwner = action.payload.tokenOwner;
      draft.quote_token = action.payload.quote_token;
      draft.unlock_once_purchased = action.payload.unlockOncePurchased;
    });
  }
  if (
    isType(action, approveCONT.started) ||
    isType(action, approveBUSD.started) ||
    isType(action, purchase.started) ||
    isType(action, ApproveBuyNFT.started) ||
    isType(action, getOrder.started)
  ) {
    return produce(state, (draft) => {
      draft.isCancel = false;
    });
  }

  if (isType(action, closeModal)) {
    return produce(state, (draft) => {
      draft.isApproved = false;
      draft.active = false;
    });
  }
  if (isType(action, closeSidebar)) {
    return produce(state, (draft) => {
      draft.isSidebar = false;
    });
  }
  if (isType(action, closeModalIn)) {
    return produce(state, (draft) => {
      draft.isOpen = false;
    });
  }
  if (isType(action, closeModalIn)) {
    return produce(state, (draft) => {
      draft.isMaint = false;
    });
  }

  if (
    isType(action, approveBUSD.failed) ||
    isType(action, approveCONT.failed) ||
    isType(action, purchase.failed) ||
    isType(action, ApproveBuyNFT.failed)||
    isType(action, getOrder.failed)
  ) {
    return produce(state, (draft) => {
      console.log("failed", state);
      draft.isCancel = true;
    });
  }

  if (isType(action, getProduct.started)) {
    return produce(state, (draft) => {
      draft.product = undefined;
      draft.isGetDone = false;
      draft.isSuccess = false;
    });
  }

  if (isType(action, getProduct.done)) {
    return produce(state, (draft) => {
      draft.product = action.payload.result;
      draft.isGetDone = true;
    });
  }

  if (isType(action, getProduct.failed)) {
    return produce(state, (draft) => {
      //NOTE: set true here to show dump data for mock items
      draft.isGetDone = true;
    });
  }

  return state;
};

export default reducer;
