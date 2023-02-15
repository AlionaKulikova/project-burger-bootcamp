export const GET_FAILED = "GET_FAILED";

export function checkResponse(res, dispatch) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(

    dispatch({
      type: GET_FAILED,
    })
  )
};