import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"

import thunk from "redux-thunk"
import logger from "redux-logger"

import {reducer as pokemonReducer} from "./reducers/reducer"


const store = createStore(pokemonReducer, applyMiddleware(thunk,logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root'));
