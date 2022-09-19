import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../Store/Types/UserTypes";
type state={
    value :User[]
}
let initialState:state={
    value:[]
}


export let request=createAsyncThunk('user/fetch',()=>{
   return axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>res.data)
})


export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<User[]>) => {
      state.value = action.payload;
    },
    
  },
  extraReducers:(builder)=>{
    builder.addCase(request.pending,(state)=>{
        state.value=[]
    })
    builder.addCase(request.fulfilled,(state,action ) => {
        state.value=action.payload
    })
    builder.addCase(request.rejected,(state,action)=>{
        console.log('error')
    })
  }
});
export const { getData } = dataSlice.actions;
export default dataSlice.reducer;

export type t=ReturnType<typeof dataSlice.reducer>