import { config } from './App.js';
import { checkResponse } from "../../utils/utils.js";


export const POST_DATA_LOGIN = "POST_DATA_LOGIN ";
export const GET_FAILED_LOGIN = "GET_FAILED_LOGIN ";
export const GET_POST_SUCCESS_LOGIN = "GET_POST_SUCCESS_LOGIN ";
export const USER_PASSWORD = "USER_PASSWORD";

export function postDataLogin(dataEmail, dataPassword) {

  const idData = {
    email: dataEmail,
    password: dataPassword,
  };

  return function (dispatch) {
    dispatch({
      type: POST_DATA_LOGIN,
      text: "по умолчанию post",
    });

    fetch(`${config.baseUrl}/auth/login`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(idData),
    })
      .then(checkResponse)
      .then((data) => {
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch({
          type: GET_POST_SUCCESS_LOGIN,
          dataPost: data,
        })
      }
      )
      .catch((err) => {
        dispatch({
          type: GET_FAILED_LOGIN,
        })
      });
  };
}