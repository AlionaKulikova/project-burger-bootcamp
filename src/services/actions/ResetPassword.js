import { config } from './App.js';
import { checkResponse } from "../../utils/utils.js";


export const POST_DATA_RESET_PASSWORD = "POST_DATA_RESET_PASSWORD";
export const GET_FAILED_RESET_PASSWORD = "GET_FAILED_RESET_PASSWORD";
export const GET_POST_SUCCESS_RESET_PASSWORD = "GET_POST_SUCCESS_RESET_PASSWORD";

export function postDataPassword(dataPassword, number) {

  const idData = {
    password: dataPassword,
    token: number,
  };

  return function (dispatch) {
    dispatch({
      type: POST_DATA_RESET_PASSWORD,
      text: "по умолчанию post",
    });

    fetch(`${config.baseUrl}/password-reset/`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(idData),
    })
      .then(checkResponse)
      .then((data) =>
        dispatch({
          type: GET_POST_SUCCESS_RESET_PASSWORD,
          dataPost: data,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_FAILED_RESET_PASSWORD,
        });
      });
  };
}