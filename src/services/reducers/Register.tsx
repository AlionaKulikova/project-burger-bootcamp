import { POST_DATA_REGISTER, GET_FAILED_REGISTER, GET_POST_SUCCESS_REGISTER } from '../actions/Register';
import { AppActions } from "../../utils/types";

interface IPostRegister {
  postRequest: boolean,
  postFailed: boolean,
  dataPost: {},
}

export const initialState: IPostRegister = {
  postRequest: false,
  postFailed: false,
  dataPost: {},
}

export const postRegister = (state = initialState, action: AppActions): IPostRegister => {

  switch (action.type) {
    case POST_DATA_REGISTER: {

      return {
        ...state,
        postRequest: true,
        postFailed: false,
      };
    }
    case GET_POST_SUCCESS_REGISTER: {
      return {
        ...state,
        dataPost: action.dataPost,
        postRequest: false,
      };
    }

    case GET_FAILED_REGISTER: {
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