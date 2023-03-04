import { POST_DATA_FORGOT_PASSWORD, GET_FAILED_FORGOT_PASSWORD, GET_POST_SUCCESS_FORGOT_PASSWORD } from '../actions/ForgotPassword';

const initialState = {
  postRequest: false,
  postFailed: false,
  dataPost: {},
  buttonClick: false,
}

export const postForgotPasswordReducer = (state = initialState, action) => {

  switch (action.type) {
    case POST_DATA_FORGOT_PASSWORD: {
      return {
        ...state,
        postRequest: true,
        postFailed: false,
      };
    }
    case GET_POST_SUCCESS_FORGOT_PASSWORD: {
      return {
        ...state,
        dataPost: action.dataPost,
        buttonClick: true,
        postRequest: false,
      };
    }

    case GET_FAILED_FORGOT_PASSWORD: {
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