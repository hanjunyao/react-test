/*
 * @Autor: hanjy
 * @Date: 2021-05-03 15:37:24
 * @LastEditors: hanjy
 * @LastEditTime: 2021-05-03 20:45:13
 * @Description: 
 * @FilePath: /reacttest1/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './components/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App name="testname1"/>
    <App name="testname2"/>
    <App />
    <Calculator>
      <h1>这是父组件：类似于slot的功能</h1>
    </Calculator>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
