import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { getProductList, LIMIT_PER_PAGE, getTotalVolume, GetProductListReq,getListTotalVolume} from 'store/explore';
import axios from 'axios';
import { Sort, SortDefaultValue } from 'components/pages/explore/form';
import { isArray } from 'util';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getProductsAPI = (params: GetProductListReq) => {
  const { filter, sort } = Sort[params.filterAndSort || SortDefaultValue];
  if (params.category == 'Trend') {
    return axios.get(`${process.env.ADDRESS_API}/trend`)
  }
  else if (params.category == 'Best') {
    return axios.get(`${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=view&title=&address=${params.address}`)
  }
  else if (params.category == 'Most Profitable') {
    return axios.get(`${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=price&title=&address=${params.address}`)
  }
  else if (params.category == 'New') {
    return axios.get(`${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=created-date&title=&address=${params.address}`)
  }
  else if (params.category == 'Recently Traded') {
    return axios.get(`${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=trade&title=&address=${params.address}`)
  }
  else if (params.category !== null || params.category == 'All' || !params.category ) {
  return axios.get(
    `${process.env.ADDRESS_API}/nft/collectible-paging?cursor=${params.cursor || ''}&limit=${
      params.limit || LIMIT_PER_PAGE
    }&sort=${sort}&filter=${filter}${
      (params.category && params.category !== 'All' && `&categories=${params.category.toLocaleLowerCase()}`) || ''
    }${params.title ? `&title=${params.title}` : ''}&address=${params.address}`
  );
  }
};


const getProductListEpic: Epic = action$ =>
  action$.pipe(
    filter(getProductList.started.match),
    mergeMap(action => {
      const params = action.payload;
      return from(getProductsAPI(params)).pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map(res => {
          return getProductList.done({
            params: action.payload,
            result: res.data,
          });
        }),
        catchError(error => {
          return of(getProductList.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

const getTotalVolumeEpic: Epic = action$ =>
  action$.pipe(
    filter(getTotalVolume.started.match),
    mergeMap(action => {
      return from(
        axios.get(`${process.env.ADDRESS_API}/exchange/total-sold?duration=24h&quote_token=${action.payload.unit}`)
      ).pipe(
        map(res => {
          return getTotalVolume.done({
            params: action.payload,
            result: res.data,
          });
        }),
        catchError(error => {
          return of(getTotalVolume.failed({ params: action.payload, error: error }));
        })
      );
    })
  );

const getListTotalVolumeEpic: Epic = action$ =>
  action$.pipe(
    filter(getListTotalVolume.started.match),
    mergeMap(action => {
      if (isArray(action.payload)) {
        action.payload.map((item, index) => {
          let arr: any[] = [];
          let errs = [];
          from(axios.get(`${process.env.ADDRESS_API}/exchange/total-sold?duration=24h&quote_token=${item.unit}`))
          .pipe(
            map(res => {
              arr.push(res.data);
            return arr;
           
            }),
            catchError(error => {
              return error;
            })     
            );
        })
      }
      return from(
        axios.get(`${process.env.ADDRESS_API}/exchange/total-sold?duration=24h&quote_token=${action.payload.unit}`)
      ).pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map(res => {

          return getListTotalVolume.done({
            params: action.payload,
            result: res.data,
          });
        }),
        catchError(error => {
          return of(getListTotalVolume.failed({ params: action.payload, error: error }));
        })
      );
      
    })
  );
export default combineEpics(getProductListEpic, getTotalVolumeEpic, getListTotalVolumeEpic);
// export default combineEpics(getProductListEpic, getTotalVolumeEpic);

