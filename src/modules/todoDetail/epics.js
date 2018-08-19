import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  TODOS_GET_DETAIL_REQUEST,
  TODOS_GET_DETAIL_SUCCESS,
  TODOS_AJAX_FAILURE
} from './actions';

const createErrorAction = message => error => Observable.of({
  type: TODOS_AJAX_FAILURE,
  error,
  message,
});

const getTodoDetail = action$ =>
  action$.ofType(TODOS_GET_DETAIL_REQUEST)
    .mergeMap(action =>
      ajax.get(`http://localhost:3001/todos/${action.id}`)
        .map(() => ({ type: TODOS_GET_DETAIL_SUCCESS, id: action.id }))
        .catch(createErrorAction(`Failed to remove task #${action.id}`)),
    );


export default combineEpics(
  getTodoDetail
);
