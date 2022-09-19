// import React,{useEffect} from 'react'
// import { ActionPropsType } from '../Store/Types/ActionProps'
// import { useSelector, useDispatch } from "react-redux/es/exports";
// import {bindActionCreators} from 'redux'
// import { buycake,reset } from '../Store/Actions/ActionCreators';
// import { ActionCreator } from '../Store';
// import { getUser } from '../Store/Actions/ActionCreators';
// export default function CakeContainer() {
// let data=useSelector((s:ActionPropsType)=>s)
// let dispatch=useDispatch();
// useEffect(()=>{
// dispatch(getUser())
// },[])
// console.log(data)
//   return (
//     <div>
//       <h2>{data.reducer}</h2>
//       <button
//         onClick={() => {
//           dispatch(buycake(1));
//         }}
//       >
//         Buy Cake
//       </button>
//       <button
//         onClick={() => {
//           dispatch(reset());
//         }}
//       >
//         Reset
//       </button>

//       <div>
//         <ul>
//           {data.UserReducer.map((m) => {
//             return <li>{m.name}</li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment,decrement,incrementByValue,decrementByValue } from '../State/Actions/Action'
// export default function CakeContainer() {
//   let st=useSelector((s)=>{return s})
//   let dispatch=useDispatch();
//   console.log(st)
//   return (
//     <div>
//       <h1>{st}</h1>
//       <button
//         onClick={() => {
//           dispatch(increment(1));
//         }}
//       >
//         inc
//       </button>
//       <button
//         onClick={() => {
//           dispatch(decrement(1));
//         }}
//       >
//         dec
//       </button>
//       <button
//         onClick={() => {
//           dispatch(decrementByValue(10));
//         }}
//       >
//         decbyvalue
//       </button>
//       <button
//         onClick={() => {
//           dispatch(incrementByValue(10));
//         }}
//       >
//         incbyvalue
//       </button>
//     </div>
//   );
// }
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getData, t } from "../redux/Slice/Slice";
// import { User } from "../Store/Types/UserTypes";
// export default function CakeContainer() {
//   let [state, setstate] = useState<User[]>([]);
//   let st = useSelector((s) => s);
//   let dispatch = useDispatch();
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//       dispatch(getData(res.data));

//       setstate(res.data);
//     });
//   }, []);
//   function del(id) {
//     const filterData = state.filter((f) => f.id != id);
//     setstate(filterData);
//     dispatch(getData(filterData));
//   }
//   return (
//     <div>
//       <ul>
//         {st.data.value.map((m) => {
//           return (
//             <li
//               onClick={() => {
//                 del(m.id);
//               }}
//             >
//               {m.name}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

import React from 'react'

export default function CakeContainer() {
  return (
    <div>CakeContainer</div>
  )
}

