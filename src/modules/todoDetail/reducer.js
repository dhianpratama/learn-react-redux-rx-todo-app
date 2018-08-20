import {
  TODOS_AJAX_FAILURE,
  TODOS_GET_DETAIL_REQUEST,
  TODOS_GET_DETAIL_SUCCESS
} from './actions';

const initialState = {
  pending: false,
  error: null,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_AJAX_FAILURE:
      return {
        ...state,
        pending: false,
        error: {
          message: action.message,
          ajaxError: action.error,
        },
      };
    case TODOS_GET_DETAIL_REQUEST:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case TODOS_GET_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
