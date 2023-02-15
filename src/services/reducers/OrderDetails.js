import { POST_DATA, GET_FAILED, GET_POST_SUCCESS } from '../actions/OrderDetails.js';

const initialState = {
  postRequest: false,
  postFailed: false,
  dataPost: {},
}

export const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case POST_DATA: {
      return {
        ...state,
        postRequest: true,
        postFailed: false,
      };
    }
    case GET_POST_SUCCESS: {

      return {
        ...state,
        dataPost: action.dataPost,
        postRequest: false,
      };
    }

    case GET_FAILED: {

      return {
        ...state,
        postFailed: true,
        postRequest: false
      };
    }

    default: {
      return state
    }
  }
}