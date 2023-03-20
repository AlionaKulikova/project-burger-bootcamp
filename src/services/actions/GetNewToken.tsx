import { checkResponse } from "../../utils/utils";
import { AppDispatch, AppThunk } from "../../utils/types";

export const POST_DATA_TOKEN: "POST_DATA_TOKEN" = "POST_DATA_TOKEN";
export const GET_NEW_TOKEN: "GET_NEW_TOKEN" = "GET_NEW_TOKEN";
export const GET_FAILED_TOKEN: "GET_FAILED_TOKEN" = "GET_FAILED_TOKEN";


export const getNewToken = (refreshToken: string | null): AppThunk => {
  const idData = {
    token: refreshToken,
  }

  return function (dispatch: AppDispatch) {
    dispatch({
      type: POST_DATA_TOKEN,
      text: "по умолчанию post",
    });

    fetch('https://norma.nomoreparties.space/api/auth/token', {
      method: "POST",
      headers: {
        "authorization": refreshToken || '',
        "Content-Type": "application/json",
      },
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