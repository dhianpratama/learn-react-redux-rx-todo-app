import {
  TODOS_FETCH_REQUEST,
  TODOS_ADD_REQUEST,
  TODOS_REMOVE_REQUEST,
  TODOS_EDIT_REQUEST,
  TODOS_COMPLETE_REQUEST,
  TODOS_REMOVE_COMPLETED_REQUEST,
  TODOS_NAVIGATE_TO_DETAIL,
} from '../constants/ActionNames';

export const fetchTodos = () => ({ type: TODOS_FETCH_REQUEST });
export const addTodo = text => ({ type: TODOS_ADD_REQUEST, text });
export const deleteTodo = id => ({ type: TODOS_REMOVE_REQUEST, id });
export const editTodo = (id, text) => ({ type: TODOS_EDIT_REQUEST, id, text });
export const completeTodo = (id, completed) => ({ type: TODOS_COMPLETE_REQUEST, id, completed });
export const removeCompleted = () => ({ type: TODOS_REMOVE_COMPLETED_REQUEST });
export const navigateToDetail = (id) => ({ type: TODOS_NAVIGATE_TO_DETAIL, id });
