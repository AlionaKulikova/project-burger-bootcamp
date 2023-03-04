import { config } from './App.js';
import { checkResponse } from "../../utils/utils.js";
export const POST_DATA = "POST_DATA";
export const GET_FAILED = "GET_FAILED";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";

export function sendData(idConstructorForPost) {

  const idData = { ingredients: idConstructorForPost };

  return function (dispatch) {
    dispatch({
      type: POST_DATA,
      text: "по умолчанию post",
    });

    fetch(`${config.baseUrl}/orders/`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(idData),
    })
      .then(checkResponse)
      .then((data) =>
        dispatch({
          type: GET_POST_SUCCESS,
          dataPost: data,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_FAILED,
        });
      });
  };
}