import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store/store.js"
import React from "react"
import { decrement, increment } from "../../redux/reducers/counterSlice.js"

const Counter=()=>{
  const count=useSelector((state)=>state?.counterReducer.value
  )
  
  const dispatch=useDispatch()
//   console.log(count);
  
    return <div>
        <h2>{count}</h2> 
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    </div>
}

export default Counter