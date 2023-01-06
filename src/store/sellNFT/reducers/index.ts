import { StepIcon } from "components/molecules/stepItem";
import produce from "immer";
import { Reducer } from "redux";
import { isType } from "typescript-fsa";
import { resellNFT, ApprovesellNFT, CreateNFT } from "store/sellNFT";
import { resetStore } from "store/createNFT";
import { CreateForm, initialValue as init } from "components/pages/create/form";

type sellNFT = {
  idNFT: number;
  tokenURI: string;
  currentStep: {
    number: number;
    status: StepIcon | "loading";
  };
  refresh?: boolean;
  reload?: boolean;
  newProduct: CreateForm;
};

const initialValue: sellNFT = {
  idNFT: 0,
  tokenURI: "",
  currentStep: { number: -1, status: "loading" },
  newProduct: init,
};

const reducer: Reducer<sellNFT> = (state = initialValue, action) => {
  if (isType(action, resetStore)) {
    return produce(state, (draft) => {
      draft.currentStep = initialValue.currentStep;
      draft.tokenURI = initialValue.tokenURI;
    });
  }

  if (isType(action, resellNFT.started)) {
    return produce(state, (draft) => {
      if (draft.currentStep.status !== "loading")
        draft.currentStep.status = "loading";
      draft.currentStep.number += 1;
      if (action.payload.data) draft.newProduct = action.payload.data;
    });
  }

  if (isType(action, resellNFT.done)) {
    return produce(state, (draft) => {
      draft.currentStep.number += 1;
      console.log("resellNFT done", action.payload);
    });
  }
  if (isType(action, resellNFT.failed)) {
    return produce(state, (draft) => {
      console.log("fail", state);
      draft.currentStep.status = "try-again";
    });
  }
  if (
    isType(action, ApprovesellNFT.started) ||
    isType(action, CreateNFT.started)
  ) {
    return produce(state, (draft) => {
      if (draft.currentStep.status !== "loading")
        draft.currentStep.status = "loading";
      draft.currentStep.number += 1;
      if (action.payload.data) draft.newProduct = action.payload.data;
    });
  }
  if (isType(action, CreateNFT.done)) {
    return produce(state, (draft) => {
      console.log("CreateNFT done", action.payload);
    });
  }
  if (isType(action, ApprovesellNFT.done)) {
    return produce(state, (draft) => {
      console.log("ApprovesellNFT done", action.payload);
    });
  }
  if (isType(action, ApprovesellNFT.failed)) {
    return produce(state, (draft) => {
      console.log("fail", state);
      draft.currentStep.status = "try-again";
    });
  }
  return state;
};

export default reducer;
