import { config } from './App';
import { checkResponse } from "../../utils/utils";
import { getNewToken } from "../../services/actions/GetNewToken";
import { AppDispatch, AppThunk } from '../../utils/types';

export const POST_DATA = "POST_DATA";
export const GET_FAILED_ORDER = "GET_FAILED_ORDER";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";


export const sendData = (idConstructorForPost: string, tokenAccess: string): AppThunk => {

  const idData = { ingredients: idConstructorForPost };

  return function (dispatch: AppDispatch) {
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
          type: GET_FAILED_ORDER,
        });
      });
  };
}