import { POST_DATA, GET_FAILED_ORDER, GET_POST_SUCCESS } from '../actions/OrderDetails';
import { AppActions } from "../../utils/types";

interface IPost {
  postRequest: boolean,
  postFailed: boolean,
  dataPost: {},
}

const initialState: IPost = {
  postRequest: false,
  postFailed: false,
  dataPost: {},
}

export const postReducer = (state = initialState, action: AppActions): IPost => {
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

    case GET_FAILED_ORDER: {
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