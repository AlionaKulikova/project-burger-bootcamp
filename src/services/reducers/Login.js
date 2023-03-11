import { POST_DATA_LOGIN, GET_FAILED_LOGIN, GET_POST_SUCCESS_LOGIN, USER_PASSWORD } from '../actions/Login';
import { POST_DATA_TOKEN, GET_NEW_TOKEN, GET_FAILED_TOKEN } from '../actions/GetNewToken';
import { PUTCH_DATA_LOGIN, PUTCH_FAILED_LOGIN, PUTCH_SUCCESS_LOGIN } from '../actions/EditProfile';
import { ESC_DATA_LOGIN, ESC_FAILED_LOGIN, ESC_SUCCESS_LOGIN } from '../actions/LoginEsc';

const initialState = {
  postRequest: false,
  postFailed: false,
  dataPost: {},
  nameUser: '',
  emailUser: '',
  tokenAccess: '',
  tokenRefresh: '',
  refreshTokenUser: '',
  tokenRequest: false,
  tokenFailed: false,
  dataPatch: {},
  userPassword: '',
  escRequest: false,
  escFailed: false,
  prevname: '',
  prevemail: '',
  prevpassword: '',
}

export const postLogin = (state = initialState, action) => {

  switch (action.type) {
    case POST_DATA_LOGIN: {
      return {
        ...state,
        postRequest: true,
        postFailed: false,
      };
    }
    case GET_POST_SUCCESS_LOGIN: {
      return {
        ...state,
        dataPost: action.dataPost,
        nameUser: action.dataPost.user.name,
        emailUser: action.dataPost.user.email,
        tokenAccess: action.dataPost.accessToken,
        tokenRefresh: action.dataPost.refreshToken,
        refreshTokenUser: action.refreshTokenUser,
        postRequest: false,
        prevname: action.dataPost.user.name,
        prevemail: action.dataPost.user.email,

      };
    }

    case GET_FAILED_LOGIN: {
      return {
        ...state,
        postFailed: true,
        postRequest: false
      };
    }

    case POST_DATA_TOKEN: {
      return {
        ...state,
        tokenRequest: true,
        tokenFailed: false,
      };
    }

    case GET_NEW_TOKEN: {
      return {
        ...state,
        tokenAccess: action.tokenAccess,
        tokenRequest: false,
      };
    }

    case GET_FAILED_TOKEN: {
      return {
        ...state,
        tokenFailed: true,
        tokenRequest: false
      };
    }

    case PUTCH_DATA_LOGIN: {
      return {
        ...state,
        patchRequest: true,
        patchFailed: false,
      };
    }

    case PUTCH_SUCCESS_LOGIN: {
      return {
        ...state,
        dataPatch: action.dataPatch,
        nameUser: action.dataPatch.user.name,
        emailUser: action.dataPatch.user.email,
        patchRequest: false,
      };
    }

    case PUTCH_FAILED_LOGIN: {
      return {
        ...state,
        patchFailed: true,
        patchRequest: false
      };
    }

    case USER_PASSWORD: {
      return {
        ...state,
        userPassword: action.password,
        prevpassword: action.password,

      };
    }

    case ESC_DATA_LOGIN: {
      return {
        ...state,
        escRequest: true,
        escFailed: false,
      };
    }

    case ESC_SUCCESS_LOGIN: {
      return {
        ...state,
        escPost: action.dataPost,
        nameUser: '',
        tokenAccess: '',
        escRequest: false,
        dataPost: {},
      };
    }

    case ESC_FAILED_LOGIN: {
      return {
        ...state,
        escFailed: true,
        escRequest: false
      };
    }
    default: {
      return state
    }
  }
}