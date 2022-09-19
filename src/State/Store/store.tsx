import { reduce } from "../Reducer/Reducer"
import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import Logger from 'redux-logger'
export default configureStore({
    reducer:reduce,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(Logger,thunk)
})