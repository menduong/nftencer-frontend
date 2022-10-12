import produce from 'immer';
import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { getBUSD, getCONT } from 'store/getBalance/actions';

type Balance = {
  busdBalance: string;
  contBalance: string;
};

const initialValue: Balance = {
  busdBalance: '0',
  contBalance: '0',
};

const reducer: Reducer<Balance> = (state = initialValue, action) => {
  if (isType(action, getBUSD.done)) {
    return produce(state, draft => {
      draft.busdBalance = action.payload.result;
    });
  }
  if (isType(action, getCONT.done)) {
    return produce(state, draft => {
      draft.contBalance = action.payload.result;
    });
  }
  if (isType(action, getBUSD.failed) || isType(action, getCONT.failed)) {
    return produce(state, () => {
      console.log('error', action.payload.error);
    });
  }

  return state;
};

export default reducer;
