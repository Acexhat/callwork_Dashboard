import { select, takeEvery, put, call } from "redux-saga/effects";
import { fetchData, fetchSummaryData } from "../services/services";
import { PAGE_SIZE } from "../Utils/constants";
const GET_FETCH_DATA = "GET_FETCH_DATA";

function* onFetchData() {
  try {
    // API Request
    yield put({ type: "SET_LOADING_PAGE" });
    const pageToLoad = yield select((state) => state.DummyData.loadingPage);
    const response = yield call(fetchData, pageToLoad);
    yield put({ type: "SET_DATA", payload: response.data.workbookItems });
    yield put({ type: "OVERVIEW_DATA", payload: response.data.overview });

    let totalPage = response.data.overview.totalCustomerCount / PAGE_SIZE - 2;
    yield put({ type: "SET_TOTAL_PAGE", payload: totalPage });

    const summaryResponse = yield call(fetchSummaryData);
    yield put({ type: "GET_SUMMARY_DATA", payload: summaryResponse.data });
  } catch (e) {
    console.log("error thrown");
  }
}

export function* dataFetchingSaga() {
  yield takeEvery(GET_FETCH_DATA, onFetchData);
}
