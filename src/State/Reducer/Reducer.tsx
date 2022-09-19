import { DispatchType } from "../Types/DispatchTypes"

export type action={
    type:DispatchType
    payload:number
}

let initialState=10
export const reduce=(state=initialState,action:action)=>{
    switch (action.type) {
      case DispatchType.INCREMENT:
        return (state += action.payload);
      case DispatchType.DECREMENT:
        return (state -= action.payload);
      case DispatchType.INCREMENT_BY_VALUE:
        return (state += action.payload);
      case DispatchType.DECREMENT_BY_VALUE:
        return (state -= action.payload);
        default :
        return (state)
    }
}