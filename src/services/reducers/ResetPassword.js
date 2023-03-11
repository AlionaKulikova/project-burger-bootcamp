import { POST_DATA_RESET_PASSWORD, GET_FAILED_RESET_PASSWORD, GET_POST_SUCCESS_RESET_PASSWORD } from '../actions/ResetPassword';

const initialState = {
  postRequest: false,
  postFailed: false,
  dataPost: {},
}

export const postResetPasswordReducer = (state = initialState, action) => {

  switch (action.type) {
    case POST_DATA_RESET_PASSWORD: {

      return {
        ...state,
        postRequest: true,
        postFailed: false,
      };
    }
    case GET_POST_SUCCESS_RESET_PASSWORD: {
      return {
        ...state,
        dataPost: action.dataPost,
        postRequest: false,
      };
    }

    case GET_FAILED_RESET_PASSWORD: {
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