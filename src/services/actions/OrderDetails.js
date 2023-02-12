export const POST_DATA = "POST_DATA";
export const GET_POST_FAILED = "GET_POST_FAILED";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";

export function sendData(idConstructorForPost) {
  const idData = { ingredients: idConstructorForPost };

  return function (dispatch) {
    dispatch({
      type: POST_DATA,
      text: "по умолчанию post",
    });

    fetch("https://norma.nomoreparties.space/api/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          dispatch({
            type: GET_POST_FAILED,
          })
        );
      })
      .then((data) =>
        dispatch({
          type: GET_POST_SUCCESS,
          dataPost: data,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_POST_FAILED,
        });
      });
  };
}