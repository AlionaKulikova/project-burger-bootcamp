import { config } from './App.js';
import { checkResponse } from "../../utils/utils.js";
import { getNewToken } from "../../services/actions/GetNewToken";


export const POST_DATA = "POST_DATA";
export const GET_FAILED = "GET_FAILED";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";

export function sendData(idConstructorForPost, tokenAccess) {

  const idData = { ingredients: idConstructorForPost };

  return function (dispatch) {
    dispatch({
      type: POST_DATA,
      text: "по умолчанию post",
    });

    fetch(`${config.baseUrl}/orders/`, {
      method: "POST",
      headers: {
        "authorization": tokenAccess,
        "Content-Type": "application/json",
      },
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
        if (err.status === 401 || err.status === 403) {
          const refreshTokenUser = localStorage.getItem('refreshToken');
          getNewToken(refreshTokenUser);
        }
        dispatch({
          type: GET_FAILED,
        });
      });
  };
}