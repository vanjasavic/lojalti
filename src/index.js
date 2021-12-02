import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './components/Login';
import reportWebVitals from './reportWebVitals';

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js"; 

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
