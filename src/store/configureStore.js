// STORE 
import { applyMiddleware, combineReducers, createStore } from "redux"
import reducer from "../reducers/entries.reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import modalReducer from "../reducers/modal.reducers";
import createSagaMiddleware from 'redux-saga';

import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware
];

const storeConfigure = () => {
  const store = createStore( 
    combineReducers({
      entries: reducer,
      modals: modalReducer
    }), 
    composeWithDevTools( 
      applyMiddleware( ...middlewares )
    )
  );
  initSagas( sagaMiddleware );

  return store;
};

export default storeConfigure;