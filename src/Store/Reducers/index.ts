import {reducer,UserReducer} from './reducer'
import {combineReducers} from 'redux'
export let reducers=combineReducers({reducer,UserReducer})
export type ReducerType=ReturnType<typeof reducers>
