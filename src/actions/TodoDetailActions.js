import { TODOS_BACK_TO_LIST, TODOS_GET_DETAIL_REQUEST } from '../constants/ActionNames';

export const backToTodoList = () => ({ type: TODOS_BACK_TO_LIST });
export const getTodoDetail = id => ({ type: TODOS_GET_DETAIL_REQUEST, id });
