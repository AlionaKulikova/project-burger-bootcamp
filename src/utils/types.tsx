import { ThunkAction } from "redux-thunk";
import { rootReducer } from "../services/reducers/index";

export type TIngredient = {
  calories: number,
  carbohydrates: number,
  fat: number,
  image: string,
  image_large: string,
  image_mobile: string,
  name: string,
  price: number,
  proteins: number,
  type: string,
  __v: number,
  _id: string,
};

export type TConstructorIngredient = {
  arr: {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string,
  },
  board: string,
  id: {
    data: {
      calories: number,
      carbohydrates: number,
      fat: number,
      image: string,
      image_large: string,
      image_mobile: string,
      name: string,
      price: number,
      proteins: number,
      type: string,
      __v: number,
      _id: string,
    }
  },
  randomId: number,
};

export type TIngredientDrag = {
  data: {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string,
  }
};

export type TBurgerIngredient = {
  calories: number,
  carbohydrates: number,
  fat: number,
  image: string,
  image_large: string,
  image_mobile: string,
  name: string,
  price: number,
  proteins: number,
  type: string,
  __v: number,
  _id: string,
};

export interface IOrder {
  name?: string,
  order?: {
    createdAt: "2023-03-13T17:44:51.781Z"
    ingredients: object[]
    name: string,
    number: number,
    owner: {
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string
    }
    price: number,
    status: string,
    updatedAt: string,
    _id: string
  },
  success?: boolean,
}

export type TPatchLogin = {
  accessToken: string,
  refreshToken: string,
  success: boolean,
  user: {
    email: string,
    name: string,
  }
}

export interface ISocketActions {
  wsInit: string,
  onOpen: string,
  onClose: string,
  onError: string,
  onMessage: string
}
export interface IMessage {
  orders: TOrders[],
  success: boolean,
  total: number,
  totalToday: number,

}

export type TOrders = {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: number,
  status: string,
  updatedAt: string,
  _id: string,
};

export type TWSStoreActions = {
  wsInit: typeof WS_CONNECTION_START | typeof WS_USER_CONNECTION_START,
  onOpen: typeof WS_USER_CONNECTION_SUCCESS | typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED | typeof WS_USER_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR | typeof WS_USER_CONNECTION_ERROR,
  onMessage: typeof WS_GET_MESSAGE | typeof WS_USER_GET_MESSAGE,
}

export const GET_FEED: "GET_FEED" = "GET_FEED";
export const GET_FAILED: "GET_FAILED" = "GET_FAILED";
export const GET_FEED_SUCCESS: "GET_FEED_SUCCESS" = "GET_FEED_SUCCESS";

export const PUTCH_DATA_LOGIN: "PUTCH_DATA_LOGIN" = "PUTCH_DATA_LOGIN";
export const PUTCH_FAILED_LOGIN: "PUTCH_FAILED_LOGIN" = "PUTCH_FAILED_LOGIN";
export const PUTCH_SUCCESS_LOGIN: "PUTCH_SUCCESS_LOGIN" = "PUTCH_SUCCESS_LOGIN";

export const POST_DATA_FORGOT_PASSWORD: "POST_DATA_FORGOT_PASSWORD" = "POST_DATA_FORGOT_PASSWORD";
export const GET_FAILED_FORGOT_PASSWORD: "GET_FAILED_FORGOT_PASSWORD" = "GET_FAILED_FORGOT_PASSWORD";
export const GET_POST_SUCCESS_FORGOT_PASSWORD: "GET_POST_SUCCESS_FORGOT_PASSWORD" = "GET_POST_SUCCESS_FORGOT_PASSWORD";

export const POST_DATA_TOKEN: "POST_DATA_TOKEN" = "POST_DATA_TOKEN";
export const GET_NEW_TOKEN: "GET_NEW_TOKEN" = "GET_NEW_TOKEN";
export const GET_FAILED_TOKEN: "GET_FAILED_TOKEN" = "GET_FAILED_TOKEN";

export const POST_DATA_LOGIN: "POST_DATA_LOGIN" = "POST_DATA_LOGIN";
export const GET_FAILED_LOGIN: "GET_FAILED_LOGIN" = "GET_FAILED_LOGIN";
export const GET_POST_SUCCESS_LOGIN: "GET_POST_SUCCESS_LOGIN" = "GET_POST_SUCCESS_LOGIN";
export const USER_PASSWORD: "USER_PASSWORD" = "USER_PASSWORD";

export const ESC_DATA_LOGIN: "ESC_DATA_LOGIN" = "ESC_DATA_LOGIN";
export const ESC_FAILED_LOGIN: "ESC_FAILED_LOGIN" = "ESC_FAILED_LOGIN";
export const ESC_SUCCESS_LOGIN: "ESC_SUCCESS_LOGIN" = "ESC_SUCCESS_LOGIN";

export const POST_DATA: "POST_DATA" = "POST_DATA";
export const GET_FAILED_ORDER: "GET_FAILED_ORDER" = "GET_FAILED_ORDER";
export const GET_POST_SUCCESS: "GET_POST_SUCCESS" = "GET_POST_SUCCESS";

export const GET_DATA_USER: "GET_DATA_USER" = "GET_DATA_USER";
export const GET_FAILED_USER: "GET_FAILED_USER" = "GET_FAILED_USER";
export const GET_SUCCESS_USER: "GET_SUCCESS_USER" = "GET_SUCCESS_USER";

export const POST_DATA_REGISTER: "POST_DATA_REGISTER" = "POST_DATA_REGISTER";
export const GET_FAILED_REGISTER: "GET_FAILED_REGISTER" = "GET_FAILED_REGISTER";
export const GET_POST_SUCCESS_REGISTER: "GET_POST_SUCCESS_REGISTER" = "GET_POST_SUCCESS_REGISTER";

export const POST_DATA_RESET_PASSWORD: "POST_DATA_RESET_PASSWORD" = "POST_DATA_RESET_PASSWORD";
export const GET_FAILED_RESET_PASSWORD: "GET_FAILED_RESET_PASSWORD" = "GET_FAILED_RESET_PASSWORD";
export const GET_POST_SUCCESS_RESET_PASSWORD: "GET_POST_SUCCESS_RESET_PASSWORD" = "GET_POST_SUCCESS_RESET_PASSWORD";

export const ADD_CONSTRUCTOR_COMPONENT: 'ADD_CONSTRUCTOR_COMPONENT' = 'ADD_CONSTRUCTOR_COMPONENT';
export const DELETE_CONSTRUCTOR_COMPONENT: 'DELETE_CONSTRUCTOR_COMPONENT' = 'DELETE_CONSTRUCTOR_COMPONENT';
export const CONSTRUCTER_ORDER: 'CONSTRUCTER_ORDER' = 'CONSTRUCTER_ORDER';

export const ADD_INGREDIENT_DETAL: 'ADD_INGREDIENT_DETAL' = 'ADD_INGREDIENT_DETAL';
export const DELETE_INGREDIENT_DETAL: 'DELETE_INGREDIENT_DETAL' = 'DELETE_INGREDIENT_DETAL';

export const ADD_ORDER_DETAL: "ADD_ORDER_DETAL" = "ADD_ORDER_DETAL";
export const ADD_PROFILE_ORDER_DETAL: "ADD_PROFILE_ORDER_DETAL" = "ADD_PROFILE_ORDER_DETAL";

export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';
export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';

export const ADD_DATA_ORDER: 'ADD_DATA_ORDER' = 'ADD_DATA_ORDER';

export const WS_USER_CONNECTION_SUCCESS: 'WS_USER_CONNECTION_SUCCESS' = 'WS_USER_CONNECTION_SUCCESS';
export const WS_USER_CONNECTION_ERROR: 'WS_USER_CONNECTION_ERROR' = 'WS_USER_CONNECTION_ERROR';
export const WS_USER_CONNECTION_CLOSED: 'WS_USER_CONNECTION_CLOSED' = 'WS_USER_CONNECTION_CLOSED';
export const WS_USER_GET_MESSAGE: 'WS_USER_GET_MESSAGE' = 'WS_USER_GET_MESSAGE';
export const WS_USER_SEND_MESSAGE: 'WS_USER_SEND_MESSAGE' = 'WS_USER_SEND_MESSAGE';
export const WS_USER_CONNECTION_START: 'WS_USER_CONNECTION_START' = 'WS_USER_CONNECTION_START';

export const USER_DETAL_URL: 'USER_DETAL_URL' = 'USER_DETAL_URL';

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch<TReturnType = void> = (
  action: AppActions | AppThunk<TReturnType>
) => TReturnType;


export interface IGetFeed {
  readonly type: typeof GET_FEED;
}
export interface IGetFailed {
  readonly type: typeof GET_FAILED;
}
export interface IGetSucess {
  readonly type: typeof GET_FEED_SUCCESS,
  feed: TIngredient[],
}

export interface IPutchData {
  readonly type: typeof PUTCH_DATA_LOGIN,
  text: string,
}
export interface IPutchFailed {
  readonly type: typeof PUTCH_FAILED_LOGIN;
}
export interface IPutchSucess {
  readonly type: typeof PUTCH_SUCCESS_LOGIN,
  dataPatch: {
    accessToken: string,
    refreshToken: string,
    success: boolean,
    user: {
      email: string,
      name: string,
    }
  },
}

export interface IDataForgotPassword {
  readonly type: typeof POST_DATA_FORGOT_PASSWORD,
  text: string,
}
export interface IFailedForgotPassword {
  readonly type: typeof GET_FAILED_FORGOT_PASSWORD;
}
export interface ISucessForgotPassword {
  readonly type: typeof GET_POST_SUCCESS_FORGOT_PASSWORD,
  dataPost: object,
}

export interface IPostDataToken {
  readonly type: typeof POST_DATA_TOKEN,
  text: string,
}
export interface IGetNewToken {
  readonly type: typeof GET_NEW_TOKEN,
  tokenAccess: string,
}
export interface IGetFailedToken {
  readonly type: typeof GET_FAILED_TOKEN;
}

export interface IPostDataLogin {
  readonly type: typeof POST_DATA_LOGIN,
  text: string,
}
export interface IGetFailedLogin {
  readonly type: typeof GET_FAILED_LOGIN,
}
export interface IGetPostSucessLogin {
  readonly type: typeof GET_POST_SUCCESS_LOGIN,
  dataPost: TPatchLogin,
}
export interface IUserPassword {
  readonly type: typeof USER_PASSWORD,
  password: string,
}

export interface IEscDataLogin {
  readonly type: typeof ESC_DATA_LOGIN,
  text: string,
}
export interface IEscFailedLogin {
  readonly type: typeof ESC_FAILED_LOGIN,
}
export interface IEscSuccessLogin {
  readonly type: typeof ESC_SUCCESS_LOGIN,
  dataPost: object,
}

export interface IPostData {
  readonly type: typeof POST_DATA,
  text: string,
}
export interface IGetFailedOrder {
  readonly type: typeof GET_FAILED_ORDER,
}
export interface IGetPostSuccess {
  readonly type: typeof GET_POST_SUCCESS,
  dataPost: IOrder;
}

export interface IGetDataUser {
  readonly type: typeof GET_DATA_USER,
  text: string,
}
export interface IGetFailedUser {
  readonly type: typeof GET_FAILED_USER,

}
export interface IGetSuccessUser {
  readonly type: typeof GET_SUCCESS_USER,
  dataGet: object,
}

export interface IPostDataRegister {
  readonly type: typeof POST_DATA_REGISTER,
  text: string,
}
export interface IGetFailedRegister {
  readonly type: typeof GET_FAILED_REGISTER,
}
export interface IGetPostSuccessRegister {
  readonly type: typeof GET_POST_SUCCESS_REGISTER,
  dataPost: object,
}

export interface IPostDataResetPassword {
  readonly type: typeof POST_DATA_RESET_PASSWORD,
  text: string,
}
export interface IGetFailedResetPassword {
  readonly type: typeof GET_FAILED_RESET_PASSWORD,
}
export interface IGetPostSuccessResetPassword {
  readonly type: typeof GET_POST_SUCCESS_RESET_PASSWORD,
  dataPost: object,
}

export interface IAddConstructorComponent {
  readonly type: typeof ADD_CONSTRUCTOR_COMPONENT,
  id: TIngredientDrag,
  arr: TIngredientDrag,
  board: string,
  randomId: number,
  itemId: TIngredientDrag,
}
export interface IDeleteConstructorComponent {
  readonly type: typeof DELETE_CONSTRUCTOR_COMPONENT,
  item: number,
}
export interface IConstructorOrder {
  readonly type: typeof CONSTRUCTER_ORDER,
  hoverIndex: number,
  dragIndex: number,
}

export interface IAddIngredientDetal {
  readonly type: typeof ADD_INGREDIENT_DETAL,
  dataIngredient: TBurgerIngredient,
}
export interface IDeleteIngredientDetal {
  readonly type: typeof DELETE_INGREDIENT_DETAL,
}

export interface IAddOrderDetal {
  readonly type: typeof ADD_ORDER_DETAL,
}
export interface IProfileAddOrderDetal {
  readonly type: typeof ADD_PROFILE_ORDER_DETAL,
}

export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START,
}
export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS,
}
export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR,
}
export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED,

}
export interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE,
  payload: IMessage,

}
export interface IWsSendMessage {
  readonly type: typeof WS_SEND_MESSAGE,
}

export interface IAddDataOrders {
  readonly type: typeof ADD_DATA_ORDER,
  targetOrderId: TOrders | undefined,
}

export interface IWsUserConnectionStart {
  readonly type: typeof WS_USER_CONNECTION_START,
}
export interface IWsUserConnectionSuccess {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS,

}
export interface IWsUserConnectionClosed {
  readonly type: typeof WS_USER_CONNECTION_CLOSED,

}
export interface IWsUserConnectionError {
  readonly type: typeof WS_USER_CONNECTION_ERROR,
}
export interface IWsUserGetMessage {
  readonly type: typeof WS_USER_GET_MESSAGE,
  payload: IMessage,

}
export interface IWsUserSendMessage {
  readonly type: typeof WS_USER_SEND_MESSAGE,
  tokenAccess: string,
}


export interface IUserDetalUrl {
  readonly type: typeof USER_DETAL_URL,
  useParam: string | undefined,
}

export type AppActions =
  | IGetFeed
  | IGetFailed
  | IGetSucess
  | IPutchData
  | IPutchFailed
  | IPutchSucess
  | IDataForgotPassword
  | IFailedForgotPassword
  | ISucessForgotPassword
  | IPostDataToken
  | IGetNewToken
  | IGetFailedToken
  | IPostDataLogin
  | IGetFailedLogin
  | IGetPostSucessLogin
  | IUserPassword
  | IEscDataLogin
  | IEscFailedLogin
  | IEscSuccessLogin
  | IPostData
  | IGetFailedOrder
  | IGetPostSuccess
  | IGetDataUser
  | IGetFailedUser
  | IGetSuccessUser
  | IPostDataRegister
  | IGetFailedRegister
  | IGetPostSuccessRegister
  | IPostDataResetPassword
  | IGetFailedResetPassword
  | IGetPostSuccessResetPassword
  | IAddConstructorComponent
  | IDeleteConstructorComponent
  | IConstructorOrder
  | IAddIngredientDetal
  | IDeleteIngredientDetal
  | IAddOrderDetal
  | IProfileAddOrderDetal
  | IWsSendMessage
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetMessage
  | IWsConnectionStart
  | IAddDataOrders
  | IWsUserConnectionStart
  | IWsUserConnectionSuccess
  | IWsUserConnectionClosed
  | IWsUserConnectionError
  | IWsUserGetMessage
  | IWsUserSendMessage
  | IUserDetalUrl;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;