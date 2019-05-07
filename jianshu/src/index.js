import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
//在js文件中引入css的时候，不仅在当前文件有效，在其他文件中也有效（一旦被引用全局生效）
import App from './App';
//import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

