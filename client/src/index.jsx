import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter} from "react-router-dom";

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

import './reset.css';

ReactDom.render(
  <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
