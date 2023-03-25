import { config } from './App';
import { checkResponse } from "../../utils/utils";
import { AppDispatch, AppThunk } from "../../utils/types";


export const POST_DATA_FORGOT_PASSWORD:"POST_DATA_FORGOT_PASSWORD" = "POST_DATA_FORGOT_PASSWORD";
export const GET_FAILED_FORGOT_PASSWORD:"GET_FAILED_FORGOT_PASSWORD" = "GET_FAILED_FORGOT_PASSWORD";
export const GET_POST_SUCCESS_FORGOT_PASSWORD:"GET_POST_SUCCESS_FORGOT_PASSWORD" = "GET_POST_SUCCESS_FORGOT_PASSWORD";

export const postDataEmail = (dataEmail: string): AppThunk => {

  const idData = { email: dataEmail };

  return function (dispatch: AppDispatch) {

    dispatch({
      type: POST_DATA_FORGOT_PASSWORD,
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
          type: GET_POST_SUCCESS_FORGOT_PASSWORD,
          dataPost: data,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_FAILED_FORGOT_PASSWORD,
        });
      });
  };
}