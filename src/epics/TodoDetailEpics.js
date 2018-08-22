import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  TODOS_GET_DETAIL_REQUEST,
  TODOS_GET_DETAIL_SUCCESS,
  TODOS_AJAX_FAILURE
} from '../constants/ActionNames';

const createErrorAction = message => error => Observable.of({
  type: TODOS_AJAX_FAILURE,
  error,
  message,
});

const getTodoDetail = action$ =>
  action$.ofType(TODOS_GET_DETAIL_REQUEST)
    .mergeMap(action =>
      ajax.get(`${process.env.REACT_APP_API_HOST}/todos/${action.id}`)
        .map(({ response }) => ({ type: TODOS_GET_DETAIL_SUCCESS, payload: response }))
        .catch(createErrorAction(`Failed to remove task #${action.id}`)),
    );


export default combineEpics(
  getTodoDetail
);
