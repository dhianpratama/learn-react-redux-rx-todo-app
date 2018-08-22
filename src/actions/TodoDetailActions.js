export const TODOS_AJAX_FAILURE = 'TODOS_AJAX_FAILURE';

export const TODOS_BACK_TO_LIST = 'TODOS_BACK_TO_LIST';
export const TODOS_GET_DETAIL_REQUEST = 'TODOS_GET_DETAIL_REQUEST';
export const TODOS_GET_DETAIL_SUCCESS = 'TODOS_GET_DETAIL_SUCCESS';

export const backToTodoList = () => ({ type: TODOS_BACK_TO_LIST });
export const getTodoDetail = id => ({ type: TODOS_GET_DETAIL_REQUEST, id });
