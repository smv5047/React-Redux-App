import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux"


const store = createStore(rootReducer, applyMiddleware(thunk,logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root'));
