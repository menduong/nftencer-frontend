import { checkBinanceChain } from 'lib/apiCommon';
import { Epic, combineEpics } from 'redux-observable';
import { map, filter } from 'rxjs/operators';
import { State } from 'store';
import { commonStart } from 'store/common';

const commonStartEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(commonStart.match),
    map(action => {
      const store: State = state$.value;
      return checkBinanceChain(action.payload.nextAction, store.common.account);
    })
  );

export default combineEpics(commonStartEpic);
