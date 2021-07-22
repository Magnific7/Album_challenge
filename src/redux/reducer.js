import initialState from "../redux/initialState";
import { FAILED_GET_ALBUMS, GET_ALBUMS, SEND_ID } from "./actionType";

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_ALBUMS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case FAILED_GET_ALBUMS:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
