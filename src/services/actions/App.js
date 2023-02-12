export const GET_FEED = "GET_FEED";
export const GET_FEED_FAILED = "GET_FEED_FAILED";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";

export function getFeed() {
  return function (dispatch) {
    dispatch({
      type: GET_FEED,
    });

    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          dispatch({
            type: GET_FEED_FAILED,
          })
        );
      })
      .then((data) =>
        dispatch({
          type: GET_FEED_SUCCESS,
          feed: data.data,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_FEED_FAILED,
        });
      });
  };
}