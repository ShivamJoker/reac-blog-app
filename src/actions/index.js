import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => {
  return async dispatch => {
    const responce = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POST",
      payload: responce
    });
  };
};
