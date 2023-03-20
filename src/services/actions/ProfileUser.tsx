import { checkResponse } from "../../utils/utils";
import { getNewToken } from "../../services/actions/GetNewToken";
import { AppDispatch, AppThunk } from "../../utils/types";
import { baseUrl} from '../../utils/utils'

export const GET_DATA_USER:'GET_DATA_USER' = 'GET_DATA_USER';
export const GET_FAILED_USER:"GET_FAILED_USER" = "GET_FAILED_USER";
export const GET_SUCCESS_USER:"GET_SUCCESS_USER" = "GET_SUCCESS_USER";


export const getDataUser = (tokenAccess: string): AppThunk => {

  const configProfile = {
    baseUrl: `${baseUrl}/api`,
    headers: {
      "authorization": tokenAccess,
      "Content-Type": "application/json",
    },
  };

  return function (dispatch: AppDispatch) {
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
          const refreshToken = localStorage.getItem('refreshToken');
          getNewToken(refreshToken);
        }
        dispatch({
          type: GET_FAILED_USER,
        });
      });
  };
};