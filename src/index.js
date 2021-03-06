import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom'
import './Fonts/css/font-awesome.css';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
