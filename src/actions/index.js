import jsonPlaceHolder from "../apis/jsonPlaceholder";
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  //console.log(JSON.stringify(response));
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
