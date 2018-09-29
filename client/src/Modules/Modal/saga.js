import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {apiURL} from "../../Utils/api";


export function* Worker(action) {
  console.log(action.payload.email)
  try {
    const res = yield call(axios.post, apiURL+'sendemail', action.payload);
    console.log(res)
    yield put({type:'CONTACT_INFO_RESULT', payload:res.data})
  } catch (e) {
    console.log('error network');
    yield put({type:'CONTACT_ERROR_NETWORK', payload:{status:false}})
  }
}


export function* contactWatcher() {
  yield all([
    takeLatest("SEND_CONTACT_INFO", Worker)
  ]);
}
