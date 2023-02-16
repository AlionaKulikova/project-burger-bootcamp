import { checkResponse } from "../../utils/utils.js"
export const GET_FEED = "GET_FEED";
export const GET_FAILED = "GET_FAILED";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";

export const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    authorization: "e91d2d7a-7934-4811-b5d2-d42326a1cfb9",
    "Content-Type": "application/json",
  },
};

export function getFeed() {
  return function (dispatch) {
    dispatch({
      type: GET_FEED,
    });

    fetch(`${config.baseUrl}/ingredients`)
      .then(checkResponse)
      .then((data) =>
        dispatch({
          type: GET_FEED_SUCCESS,
          feed: data.data,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_FAILED,
        });
      });
  };
}