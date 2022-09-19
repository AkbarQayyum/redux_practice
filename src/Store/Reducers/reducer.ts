import { ACTIONTYPES } from "../Actions/ActionsEnum"
import { ActionPropsType } from "../Types/ActionProps"
import { User } from "../Types/UserTypes"

let initialState=10
let initial:User=[]
export const reducer=(state=initialState,action:ActionPropsType)=>{
switch(action.type)
{
    case ACTIONTYPES.BUY_CAKE:
        return state-=1;
        case ACTIONTYPES.RESET:
            return state=initialState
            default:
                return state
}
}

export const UserReducer = (state = initial, action: ActionPropsType) => {
  switch (action.type) {
    case 'add':
        return action.payload

    default:
      return state;
  }
};


