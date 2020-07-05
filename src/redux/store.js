import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

// const initialState = {};

const middleware = [thunk];

const composeEnhance =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhance(applyMiddleware(...middleware));

const store = createStore(reducers, enhancer);

export default store;
