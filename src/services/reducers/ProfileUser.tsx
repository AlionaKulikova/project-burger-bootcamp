import { GET_DATA_USER, GET_FAILED_USER, GET_SUCCESS_USER } from '../actions/ProfileUser';
import { AppActions } from "../../utils/types";

interface IGetUser {
  getRequest: boolean,
  getFailed: boolean,
  dataGet: {},
}
export const initialState: IGetUser = {
  getRequest: false,
  getFailed: false,
  dataGet: {},
}

export const getUser = (state = initialState, action: AppActions): IGetUser => {

  switch (action.type) {
    case GET_DATA_USER: {
      return {
        ...state,
        getRequest: true,
        getFailed: false,
      };
    }

    case GET_SUCCESS_USER: {
      return {
        ...state,
        dataGet: action.dataGet,
        getRequest: false,
      };
    }

    case GET_FAILED_USER: {
      return {
        ...state,
        getFailed: true,
        getRequest: false
      };
    }
    default: {
      return state
    }
  }
}