import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "react";
import dataSlice from './Slice/Slice'
let store=configureStore({
    reducer:{
        data:dataSlice

    }
})

export default store