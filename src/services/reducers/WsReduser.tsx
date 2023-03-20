import type { IMessage, AppActions, IOrders } from '../../utils/types'
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  ADD_DATA_ORDER
} from '../../utils/types';

import {
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_CONNECTION_ERROR,
  WS_USER_CONNECTION_CLOSED,
  WS_USER_GET_MESSAGE,
} from '../../utils/types';

type TWSState = {
  wsConnected: boolean;
  messages: IMessage[];
  error?: Event;
  orders: IOrders[];
  totalToday: number,
  total: number,
  targetOrderId: {},
  user: [];
}

const initialState: TWSState = {
  wsConnected: false,
  messages: [],
  orders: [],
  total: 0,
  totalToday: 0,
  targetOrderId: {},
  user: [],
};


export const wsReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.payload,
      };

    case ADD_DATA_ORDER:
      return {
        ...state,
        targetOrderId: action.targetOrderId,
      };

    case WS_USER_CONNECTION_START:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_USER_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };

    case WS_USER_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };

    case WS_USER_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_USER_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        user: action.payload,
      };

    default:
      return state;
  }
};