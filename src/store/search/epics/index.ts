import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { getProductsAPI } from 'store/explore/epics';
import { searchNFTAction } from 'store/search';

const searchEpic: Epic = action$ =>
  action$.pipe(
    filter(searchNFTAction.started.match),
    mergeMap(action => {
      return from(getProductsAPI(action.payload)).pipe(
        map(res => {
          return searchNFTAction.done({
            params: action.payload,
            result: res.data,
          });
        }),
        catchError(error => {
          return of(searchNFTAction.failed({ params: action.payload, error: error }));
        })
      );
    })
  );
export default combineEpics(searchEpic);
