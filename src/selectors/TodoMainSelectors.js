import { createSelector } from 'reselect';

export function getTodos(state) {
  return state.data;
}

export const getIncompleteTodos = createSelector(
  getTodos,
  todos =>
    todos.filter(todo => !todo.completed),
);
