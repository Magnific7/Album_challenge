import axios from "axios";
import { FAILED_GET_ALBUMS, GET_ALBUMS, SEND_ID } from "./actionType";

export const getAlbumsAction = (id) => (dispatch) => {
  dispatch({ type: SEND_ID });
  axios
    .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then((response) => {
      dispatch({ type: GET_ALBUMS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FAILED_GET_ALBUMS, payload: error.message });
    });
};
