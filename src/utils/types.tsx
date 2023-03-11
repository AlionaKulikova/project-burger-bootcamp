import { ThunkAction } from "redux-thunk";
import { rootReducer } from "../services/reducers/index";


export const GET_FEED = "GET_FEED";
export const GET_FAILED = "GET_FAILED";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";

export const PUTCH_DATA_LOGIN = "PUTCH_DATA_LOGIN";
export const PUTCH_FAILED_LOGIN = "PUTCH_FAILED_LOGIN";
export const PUTCH_SUCCESS_LOGIN = "PUTCH_SUCCESS_LOGIN";

export const POST_DATA_FORGOT_PASSWORD = "POST_DATA_FORGOT_PASSWORD";
export const GET_FAILED_FORGOT_PASSWORD = "GET_FAILED_FORGOT_PASSWORD";
export const GET_POST_SUCCESS_FORGOT_PASSWORD = "GET_POST_SUCCESS_FORGOT_PASSWORD";

export const POST_DATA_TOKEN = "POST_DATA_TOKEN";
export const GET_NEW_TOKEN = "GET_NEW_TOKEN";
export const GET_FAILED_TOKEN = "GET_FAILED_TOKEN";

export const POST_DATA_LOGIN = "POST_DATA_LOGIN ";
export const GET_FAILED_LOGIN = "GET_FAILED_LOGIN ";
export const GET_POST_SUCCESS_LOGIN = "GET_POST_SUCCESS_LOGIN ";
export const USER_PASSWORD = "USER_PASSWORD";

export const ESC_DATA_LOGIN = "ESC_DATA_LOGIN";
export const ESC_FAILED_LOGIN = "ESC_FAILED_LOGIN";
export const ESC_SUCCESS_LOGIN = "ESC_SUCCESS_LOGIN";

export const POST_DATA = "POST_DATA";
export const GET_FAILED_ORDER = "GET_FAILED_ORDER";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";

export const GET_DATA_USER = "GET_DATA_USER ";
export const GET_FAILED_USER = "GET_FAILED_USER ";
export const GET_SUCCESS_USER = "GET_SUCCESS_USER ";

export const POST_DATA_REGISTER = "POST_DATA_REGISTER";
export const GET_FAILED_REGISTER = "GET_FAILED_REGISTER";
export const GET_POST_SUCCESS_REGISTER = "GET_POST_SUCCESS_REGISTER";

export const POST_DATA_RESET_PASSWORD = "POST_DATA_RESET_PASSWORD";
export const GET_FAILED_RESET_PASSWORD = "GET_FAILED_RESET_PASSWORD";
export const GET_POST_SUCCESS_RESET_PASSWORD = "GET_POST_SUCCESS_RESET_PASSWORD";


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
  feed: object,
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
  dataPatch: object,
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
  dataPost: object,
}
export interface IUserPassword {
  readonly type: typeof USER_PASSWORD;
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
  dataPost: object,
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

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

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