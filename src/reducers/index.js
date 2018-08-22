import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todoMainReducer from '../reducers/TodoMainReducers';
import todoDetailReducer from '../reducers/TodoDetailReducers';
import visibilityFilter from '../reducers/VisibilityFilterReducers';

export default combineReducers({
  todos: todoMainReducer,
  todo: todoDetailReducer,
  visibilityFilter,
  routing: routerReducer,
});
