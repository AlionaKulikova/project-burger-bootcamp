import { config } from './App.js';
import { checkResponse } from "../../utils/utils.js";


export const POST_DATA_REGISTER = "POST_DATA_REGISTER";
export const GET_FAILED_REGISTER = "GET_FAILED_REGISTER";
export const GET_POST_SUCCESS_REGISTER = "GET_POST_SUCCESS_REGISTER";

export function postDataRegister(dataName, dataEmail, dataPassword) {

  const idData = {
    email: dataEmail,
    password: dataPassword,
    name: dataName
  };

  return function (dispatch) {

    dispatch({
      type: POST_DATA_REGISTER,
      text: "по умолчанию post",
    });

    fetch(`${config.baseUrl}/auth/register/`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(idData),
    })
      .then(checkResponse)
      .then((data) => {
        localStorage.setItem('refreshToken', data.refreshToken)
        dispatch({
          type: GET_POST_SUCCESS_REGISTER,
          dataPost: data,
        })
      }
      )
      .catch((err) => {
        dispatch({
          type: GET_FAILED_REGISTER,
        });
      });
  };
}