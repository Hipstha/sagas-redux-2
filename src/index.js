import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import storeConfigure from './store/configureStore';

const store = storeConfigure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

