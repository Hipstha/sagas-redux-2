// STORE 
import { combineReducers, createStore } from "redux"
import reducer from "../reducers/entries.reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import modalReducer from "../reducers/modal.reducers";

const storeConfigure = () => {
  return createStore( 
    combineReducers({
      entries: reducer,
      modals: modalReducer
    }), 
    composeWithDevTools()
  );
};

export default storeConfigure;