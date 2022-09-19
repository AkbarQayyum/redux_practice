import { ActionPropsType } from "../Types/ActionProps"
import { ACTIONTYPES } from "./ActionsEnum"
import {Dispatch} from 'redux'
import axios from "axios"
export const buycake=(nu:number)=>{
    return (dispatch:Dispatch<ActionPropsType>)=>{
        dispatch({
            type:ACTIONTYPES.BUY_CAKE,
            payload:nu
        })
    }
}
export const reset = () => {
  return (dispatch: Dispatch<ActionPropsType>) => {
    dispatch({
      type: ACTIONTYPES.RESET,
    });
  };
};

export const getUser = () => {
  return (dispatch: Dispatch<ActionPropsType>) => {
   axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
    dispatch({
      type:'add',
      payload:res.data
    })
   })
  };
};
