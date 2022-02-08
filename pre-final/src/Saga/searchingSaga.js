import { select,takeEvery, put, call } from 'redux-saga/effects';
import {searchResult} from '../actions/searchBarAction';
import {fetchSearchedData} from '../services/services'; 
const DO_SEARCHING ="DO_SEARCHING";

function* onFetchSearchData(action) {
  try {
    // API Request
    const custname = yield select((state)=>state.SearchingReducer.initial);
    const response = yield call(fetchSearchedData,custname);
    yield put({type:"SEARCH_RESULT_DATA",payload:response.data});
  } catch(e) {
    console.log("error thrown")
  }
}

export function* watcherSaga() {
  yield takeEvery(DO_SEARCHING, onFetchSearchData);
}