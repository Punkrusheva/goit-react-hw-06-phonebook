import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './components/App';
import store from "./redux/phoneBook/store";
import './stylesheets/main.css';
import './stylesheets/normalize.css';

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
    document.querySelector('#root'));