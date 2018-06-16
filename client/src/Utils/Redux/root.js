import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {sharedReducer} from '../../Shared/reducer';





//List of Watchers
import {sharedWatcher} from '../../Shared/saga';
import {contactWatcher} from '../../Modules/Modal/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      Share: sharedReducer,

      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    sharedWatcher(),
    contactWatcher(),

  ])

}
