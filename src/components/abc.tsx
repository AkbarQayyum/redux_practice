import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { request } from '../redux/Slice/Slice';
 import { User } from "../Store/Types/UserTypes";
export default function ABC() {
  let dispatch=useDispatch()
  
  useEffect(()=>{
dispatch(request())
  },[])
  let st=useSelector((s)=>s)
console.log(st)
  
  return (
    <div>
      <ul>
       
      </ul>
    </div>
  );
}
