import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import createRootReducer from "./reducers";
import rootSaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export { configureStore };
