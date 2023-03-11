import { config } from './App';
import { checkResponse } from "../../utils/utils";
import { AppDispatch, AppThunk } from "../../utils/types";

export const POST_DATA_RESET_PASSWORD = "POST_DATA_RESET_PASSWORD";
export const GET_FAILED_RESET_PASSWORD = "GET_FAILED_RESET_PASSWORD";
export const GET_POST_SUCCESS_RESET_PASSWORD = "GET_POST_SUCCESS_RESET_PASSWORD";


export const postDataPassword = (dataPassword: string, number: string): AppThunk => {

  const idData = {
    password: dataPassword,
    token: number,
  };

  return function (dispatch: AppDispatch) {
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