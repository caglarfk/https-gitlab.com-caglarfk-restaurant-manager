import React from "react";
import { decrement, increment} from "../features/counterSlice";
import { useSelector,useDispatch } from 'react-redux'

 function Home() {
    const count = useSelector((state) => state.counter.value);
    const dispatch=useDispatch();
  return (
    <div>
      <h1>HOME</h1>
     <h2>{count}</h2>
     <button onClick={()=>dispatch(increment())}>arttır</button>
     <button onClick={()=>dispatch(decrement())}>azalt</button>
      
    </div>
  );
}
export default  Home;