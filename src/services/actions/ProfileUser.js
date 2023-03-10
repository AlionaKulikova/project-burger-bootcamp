import { checkResponse } from "../../utils/utils.js";
import { getNewToken } from "../../services/actions/GetNewToken";


export const GET_DATA_USER = "GET_DATA_USER ";
export const GET_FAILED_USER = "GET_FAILED_USER ";
export const GET_SUCCESS_USER = "GET_SUCCESS_USER ";

export function getDataUser(tokenAccess) {

  const configProfile = {
    baseUrl: "https://norma.nomoreparties.space/api",
    headers: {
      "authorization": tokenAccess,
      "Content-Type": "application/json",
    },
  };

  return function (dispatch) {
    console.log('зашли в ф-ю диспатч get');
    dispatch({
      type: GET_DATA_USER,
      text: "по умолчанию post",
    });

    fetch(`${configProfile.baseUrl}/auth/user`, {
      method: "GET",
      headers: configProfile.headers,
    })
      .then(checkResponse)
      .then((data) => {
        dispatch({
          type: GET_SUCCESS_USER,
          dataGet: data,
        })
      })
      .catch((err) => {
        if (err.status === 401 || err.status === 403) {
          const refreshTokenUser = localStorage.getItem('refreshToken');
          getNewToken(refreshTokenUser);
        }
        dispatch({
          type: GET_FAILED_USER,
        });
      });
  };
};