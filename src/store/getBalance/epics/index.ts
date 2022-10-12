import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { getBUSD, getCONT } from 'store/getBalance';
import { BUSDContract, CONTContract } from 'lib/smartContract';
import { State } from 'store';

const getBUSDEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(getBUSD.started.match),
    mergeMap(action => {
      const state: State = state$.value;
      return from(BUSDContract.call('balanceOf', action.payload.account || state.common.account)).pipe(
        map(res => {
          return getBUSD.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError(error => {
          return of(getBUSD.failed({ params: action.payload, error: error }));
        })
      );
    })
  );
const getCONTEpic: Epic = (action$, state$) =>
  action$.pipe(
    filter(getCONT.started.match),
    mergeMap(action => {
      const state: State = state$.value;
      return from(CONTContract.call('balanceOf', action.payload.account || state.common.account)).pipe(
        map(res => {
          return getCONT.done({
            params: action.payload,
            result: res,
          });
        }),
        catchError(error => {
          return of(getCONT.failed({ params: action.payload, error: error }));
        })
      );
    })
  );
export default combineEpics(getBUSDEpic, getCONTEpic);
