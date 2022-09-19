import { reducers } from "./Reducers";
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'


export let store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk, Logger))
);