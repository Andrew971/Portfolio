import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {apiURL} from "../Utils/api";


export function* sharedWorker(action) {
  try {
    const res = yield call(axios.post, apiURL, action.payload);
    yield put({type:'SEARCH_RESULT', payload:res.data})
  } catch (e) {
    console.log('error network');
  }
}


export function* sharedWatcher() {
  yield all([
    takeLatest("CHANGE_DATE", Worker)
  ]);
}
