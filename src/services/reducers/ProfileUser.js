import { GET_DATA_USER, GET_FAILED_USER, GET_SUCCESS_USER } from '../actions/ProfileUser';

const initialState = {
  getRequest: false,
  getFailed: false,
  dataGet: {},
}

export const getUser = (state = initialState, action) => {

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