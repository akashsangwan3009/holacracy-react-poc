import React from "react";
// import {incNumber,decNumber} from "./components/Redux/Action./index"
import { actionCreators } from "redux";

import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { useSelector,useDispatch } from "react-redux";


const Counter = ()=>{

    const myState = useSelector((state)=>state.changeTheNumber);
  const {decNumber,incNumber}=bindActionCreators(actionCreators, distpatch)

    const dispatch = useDispatch();
    return(
    <div style={{marginLeft:"30px"}}>
  <h1>Increment/Decrement Counter Application</h1>
  <h4>Useing react redux </h4>
  <div>
   <button onClick={()=>dispatch(decNumber())}>Minus</button>
    <input type="text" value={myState}/>
<button onClick={()=>dispatch(incNumber())}>Plus</button>
  </div>

</div>
    )
}
export default Counter;