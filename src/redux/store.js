import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
