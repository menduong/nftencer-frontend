import produce from 'immer';
import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { searchNFTAction } from 'store/search';
import { Product } from 'store/explore';

type SearchStore = {
  list: Product[];
  isLoading: boolean;
  next_cursor?: string;
  error?: any;
};

const reducer: Reducer<SearchStore> = (state = { isLoading: true, list: [] }, action) => {
  if (isType(action, searchNFTAction.started)) {
    return produce(state, draft => {
      if (action.payload.mode === 'refresh') {
        draft.isLoading = true;
        draft.next_cursor = void 0;
      }
      draft.error = void 0;
    });
  }
  if (isType(action, searchNFTAction.done)) {
    return produce(state, draft => {
      if (action.payload.params.mode === 'refresh') {
        draft.isLoading = false;
        draft.list = action.payload.result.collectibles;
      } else {
        draft.list.push(...action.payload.result.collectibles);
      }
      draft.next_cursor = action.payload.result.next_cursor;
    });
  }

  if (isType(action, searchNFTAction.failed)) {
    return produce(state, draft => {
      draft.list = [];
      draft.isLoading = false;
      draft.error = action.payload.error;
    });
  }

  return state;
};

export default reducer;
