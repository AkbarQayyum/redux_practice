import { Dispatch } from "react"
import { action } from "../Reducer/Reducer"
import { DispatchType } from "../Types/DispatchTypes"

export const increment=(num:number)=>{
    return (dispatch:Dispatch<action>)=>{
        dispatch({
            type:DispatchType.INCREMENT,
            payload:num
        })
    }
}


export const decrement = (num: number) => {
  return (dispatch: Dispatch<action>) => {
    dispatch({
      type: DispatchType.DECREMENT,
      payload: num,
    });
  };
};

export const incrementByValue = (num: number) => {
  return (dispatch: Dispatch<action>) => {
    dispatch({
      type: DispatchType.INCREMENT_BY_VALUE,
      payload: num,
    });
  };
};


export const decrementByValue = (num: number) => {
  return (dispatch: Dispatch<action>) => {
    dispatch({
      type: DispatchType.DECREMENT_BY_VALUE,
      payload: num,
    });
  };
};