import { checkResponse } from "../../utils/utils.js";


export const POST_DATA_TOKEN = "POST_DATA_TOKEN";
export const GET_NEW_TOKEN = "GET_NEW_TOKEN";
export const GET_FAILED_TOKEN = "GET_FAILED_TOKEN";

export function getNewToken(refreshTokenUser) {

  const idData = {
    token: refreshTokenUser,
  }
  const configProfile = {
    baseUrl: "https://norma.nomoreparties.space/api",
    headers: {
      "authorization": "e91d2d7a-7934-4811-b5d2-d42326a1cfb9",
      "Content-Type": "application/json",
    },
  };

  return function (dispatch) {

    dispatch({
      type: POST_DATA_TOKEN,
      text: "по умолчанию post",
    });

    fetch(`${configProfile.baseUrl}/auth/user`, {
      method: "GET",
      headers: configProfile.headers,
      body: JSON.stringify(idData),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch({
          type: GET_NEW_TOKEN,
          tokenAccess: data.accessToken,
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_FAILED_TOKEN,
        });
      });
  };
};