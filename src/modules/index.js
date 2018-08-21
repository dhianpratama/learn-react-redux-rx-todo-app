import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';

// todoMain
import todoMainReducer from './todoMain/reducer';
import todoMainEpic from './todoMain/epics';

// todoDetail
import todoDetailReducer from './todoDetail/reducer';
import todoDetailEpic from './todoDetail/epics';

// visibilityFilter
import visibilityFilter from './visibilityFilter/reducer';


export const epics = combineEpics(
  todoMainEpic,
  todoDetailEpic
);

export const reducers = combineReducers({
  todos: todoMainReducer,
  todo: todoDetailReducer,
  visibilityFilter,
  routing: routerReducer
});
