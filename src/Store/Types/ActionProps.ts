import { ACTIONTYPES } from "../Actions/ActionsEnum"
import { User } from "./UserTypes"

type CakeBuying={
    type:ACTIONTYPES.BUY_CAKE,
    payload:number
}
type reset={
    type:ACTIONTYPES.RESET,
}

type Add={
    type:'add'
    payload:User[]
}

export type ActionPropsType=CakeBuying | reset |Add