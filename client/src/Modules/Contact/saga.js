import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {apiURL} from "../../js/api";


export function* Worker(action) {
  try {
    const res = yield call(axios.post, apiURL+'contact', action.payload);
    yield put({type:'CONTACT_INFO_RESULT', payload:res.data})
  } catch (e) {
    console.log('error network');
  }
}


export function* contactWatcher() {
  yield all([
    takeLatest("SEND_CONTACT_INFO", Worker)
  ]);
}
