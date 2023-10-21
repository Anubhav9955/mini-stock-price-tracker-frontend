import { all } from "redux-saga/effects";
import stockSaga from "./stocks/saga";

function* rootSaga() {
  yield all([stockSaga()]);
}

export default rootSaga;
