import { config } from './App.js';
import { checkResponse } from "../../utils/utils.js";


export const PUTCH_DATA_LOGIN = "PUTCH_DATA_LOGIN";
export const PUTCH_FAILED_LOGIN = "PUTCH_FAILED_LOGIN";
export const PUTCH_SUCCESS_LOGIN = "PUTCH_SUCCESS_LOGIN";

export function patchDataUser(tokenAccess, name, email, password) {
  const idData = {
    "name": name,
    "email": email,
    "password": password,
  };

  return function (dispatch) {

    dispatch({
      type: PUTCH_DATA_LOGIN,
      text: "по умолчанию post",
    });

    fetch(`${config.baseUrl}/auth/user`, {
      method: "PATCH",
      headers: {
        "authorization": tokenAccess,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idData),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch({
          type: PUTCH_SUCCESS_LOGIN,
          dataPatch: data,
        })
      }
      )
      .catch((err) => {
        dispatch({
          type: PUTCH_FAILED_LOGIN,
        })
      });
  };
}