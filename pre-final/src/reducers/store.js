import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { watcherSaga } from "../Saga/searchingSaga";
import {dataFetchingSaga} from '../Saga/dataFetchingSaga';
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  ));

  function* saga() {
      yield all([
          watcherSaga(),
          dataFetchingSaga()
      ]);
  }

  sagaMiddleware.run(saga);
  return store;
};
export default configureStore;
