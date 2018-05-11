import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {UIReducer} from './UI';





//List of Watchers
import {Watcher} from './UI/saga';
import {contactWatcher} from './Contact/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      UI: UIReducer,

      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    Watcher(),
    contactWatcher(),

  ])

}
