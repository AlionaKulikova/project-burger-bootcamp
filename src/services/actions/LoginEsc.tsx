import { config } from './App';
import { checkResponse } from "../../utils/utils";
import { AppDispatch, AppThunk } from '../../utils/types';


export const ESC_DATA_LOGIN:"ESC_DATA_LOGIN" = "ESC_DATA_LOGIN";
export const ESC_FAILED_LOGIN:"ESC_FAILED_LOGIN" = "ESC_FAILED_LOGIN";
export const ESC_SUCCESS_LOGIN:"ESC_SUCCESS_LOGIN" = "ESC_SUCCESS_LOGIN";


export const loginEsc = (refreshToken: string): AppThunk => {

  const idData = {
    token: refreshToken,
  };

  return function (dispatch: AppDispatch) {
    dispatch({
      type: ESC_DATA_LOGIN,
      text: "по умолчанию post",
    });

    fetch(`${config.baseUrl}/auth/logout`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(idData),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch({
          type: ESC_SUCCESS_LOGIN,
          dataPost: data,
        })
      }
      )
      .catch((err) => {
        dispatch({
          type: ESC_FAILED_LOGIN,
        })
      });
  };
}