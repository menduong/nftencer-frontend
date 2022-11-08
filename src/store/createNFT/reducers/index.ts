import { StepIcon } from 'components/molecules/stepItem';
import produce from 'immer';
import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { resetStore,createTokenResellURI, createTokenURI, createNFT, approveNFT, sellNFT, sellCreateNFT, approveCreateNFT, createTokenURI1155, getTokenCountURI1155, UploadJsonURI1155 ,createNFT1155,approveNFT1155 } from 'store/createNFT';
import { CreateForm, initialValue as init } from 'components/pages/create/form';

type CreateNFT = {
  idNFT: number;
  tokenURI: string;
  currentStep: {
    number: number; 
    status: StepIcon | 'loading';
  };
  refresh?:boolean;
  reload?:boolean;
  newProduct: CreateForm;
};

const initialValue: CreateNFT = {
  idNFT: 0,
  tokenURI: '',
  currentStep: { number: -1, status: 'loading' },
  newProduct: init,
};

const reducer: Reducer<CreateNFT> = (state = initialValue, action) => {
  if (isType(action, resetStore)) {
    return produce(state, draft => {
      draft.currentStep = initialValue.currentStep;
      draft.tokenURI = initialValue.tokenURI;
    });
  }

  ///////  1155  ///////
  if (isType(action, createTokenURI1155.started)) {
    return produce(state, draft => {
      if (draft.currentStep.status !== 'loading') draft.currentStep.status = 'loading';
      draft.currentStep.number += 1;
      if (action.payload.data) draft.newProduct = action.payload.data;
    });
  }

  if (isType(action, createTokenURI1155.done)) {
    return produce(state, draft => {
    
      console.log("1155 done",action.payload)
    });
  }
  if (isType(action, getTokenCountURI1155.started)) {
    return produce(state, draft => {
      console.log("count token started",action.payload)
    });
  }


  

  if (isType(action, getTokenCountURI1155.done)) {
    return produce(state, draft => {
      console.log("count token Done",action)
    });
  }
 
  if (isType(action, createNFT1155.started)) {
    return produce(state, draft => {
      console.log("createNFT1155 started",action.payload)
    });
  }


  

  if (isType(action, createNFT1155.done)) {
    return produce(state, draft => {
      console.log("createNFT1155 Done",action)
      draft.currentStep.number += 1;
    });
  }
 


  if (isType(action, UploadJsonURI1155.started)) {
    return produce(state, draft => {
      console.log("UploadJsonURI1155 started",action.payload)
    });
  }


  if (isType(action, UploadJsonURI1155.done)) {
    return produce(state, draft => {
      console.log("UploadJsonURI1155 Done",action)
    });
  }

  //////////////////////

  if (isType(action, createTokenURI.started)) {
    return produce(state, draft => {
      if (draft.currentStep.status !== 'loading') draft.currentStep.status = 'loading';
      draft.currentStep.number += 1;
      if (action.payload.data) draft.newProduct = action.payload.data;
    });
  }
  if (isType(action, approveNFT.started)) {
    return produce(state, draft => {
      if (draft.currentStep.status !== 'loading') draft.currentStep.status = 'loading';
      draft.currentStep.number += 1;
      if (action.payload.data) draft.newProduct = action.payload.data;
    });
  }
  

  if (isType(action, createNFT.started) || isType(action, approveCreateNFT.started) || isType(action, approveNFT1155.started) || isType(action, sellCreateNFT.started)  || isType(action, sellNFT.started)) {
    return produce(state, draft => {
      console.log("start createNFT/approveCreateNFT")
      if (draft.currentStep.status !== 'loading') draft.currentStep.status = 'loading';
    });
  }

  if (isType(action, createTokenURI.done)) {
    return produce(state, draft => {
      draft.tokenURI = action.payload.result.id;
      console.log("ction.payload",action.payload)
    });
  }

  if (isType(action, createNFT.done)) {
    return produce(state, draft => {
      console.log("done createNFT")
      draft.currentStep.number += 1;
      draft.idNFT = action.payload.result.events.Transfer.returnValues.tokenId;
    });
  }

  if (isType(action, approveNFT.done)) {
    return produce(state, draft => {
      draft.currentStep.number += 1;
    });
  }
  if (isType(action, sellNFT.done)) {
    return produce(state, draft => {
      draft.currentStep.number += 1;
      draft.refresh = true;
      draft.reload = !draft.reload;
    });
  }
  if (isType(action, approveCreateNFT.done) || isType(action, approveNFT1155.done) || isType(action, sellCreateNFT.done)) {
    return produce(state, draft => {
      console.log("approveNFT1155 done",action)
      draft.currentStep.number += 1;
    });
  }

  if (
    isType(action, createTokenURI.failed) ||
    isType(action, UploadJsonURI1155.failed) ||
    isType(action, createNFT.failed) ||
    isType(action, approveNFT.failed) ||
    isType(action, approveCreateNFT.failed) ||
    isType(action, approveNFT1155.failed) ||
    isType(action, sellCreateNFT.failed) ||
    isType(action, sellNFT.failed)
  ) {
    return produce(state, draft => {
      console.log("fail")
      draft.currentStep.status = 'try-again';
    });
  }

  return state;
};

export default reducer;
