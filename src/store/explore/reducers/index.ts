import produce from 'immer';
import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { getProductList,getListTotalVolume, Product, getTotalVolume } from 'store/explore';
import { CardTypeNum, formatBalance } from 'util/formatBalance';

type ExploreState = {
  isLoading: boolean;
  products: Product[];
  productsTrend: Product[];
  prev_cursor?: string;
  next_cursor?: string;
  ready?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  totalVolume?: number;
  addressID? :any;
  addressIDcheck? :any;
};

const initialValue: ExploreState = {
  isLoading: true,
  products: [],
  productsTrend: [],
};

const reducer: Reducer<ExploreState> = (state = initialValue, action) => {
  if (isType(action, getProductList.started)) {
    return produce(state, draft => {
      if (action.payload.mode === 'refresh') {
        draft.isLoading = true;
        draft.next_cursor = void 0;
        draft.addressIDcheck = state.addressID;
      }
      draft.error = void 0;
    });
  }

  if (isType(action, getProductList.done)) {
    return produce(state, draft => {
      draft.isLoading = false;
      draft.ready = true;
      draft.addressID = action.payload.params.address;
      if (action.payload.params.mode === 'refresh' && action.payload.params.category !== 'Trend') {
        draft.isLoading = false;
        draft.products = action.payload.result.collectibles;
      } else if (action.payload.params.mode === 'refresh' && action.payload.params.category === 'Trend') {
        draft.isLoading = false;
        draft.productsTrend = action.payload.result.trend;
      }
       else {
        draft.products.push(...action.payload.result.collectibles);
      }
      draft.next_cursor = action.payload.result.next_cursor;
      draft.prev_cursor = action.payload.result.prev_cursor;
    });
  }

  if (isType(action, getProductList.failed)) {
    return produce(state, draft => {
      draft.products = initialValue.products;
      draft.isLoading = false;
      draft.error = action.payload.error;
    });
  }

  if (isType(action, getTotalVolume.done)) {
    return produce(state, draft => {
      draft.totalVolume = formatBalance(
        action.payload.params.unit as CardTypeNum,
        Number(action.payload.result.total_sold)
      );
    });
  }

  if (isType(action, getTotalVolume.failed)) {
  }
  if (isType(action, getListTotalVolume.done)) {
    return produce(state, draft => {
      draft.totalVolume = formatBalance(
        action.payload.params.unit as CardTypeNum,
        Number(action.payload.result.total_sold)
      );
    });
  }

  if (isType(action, getListTotalVolume.failed)) {
  }

  return state;
};

export default reducer;
