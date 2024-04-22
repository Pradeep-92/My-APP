
import React, { useState } from "react";

export default function Counter({defaultValue})
{

  const[count,setCount]=useState(defaultValue);
  const fn_Increment_Decrement = (countervalue) =>{
      setCount(count+countervalue);
  };

return(
        <>
          <h1><label>The Count is : {count} </label></h1>        
          <button title='Increment' onClick={()=> fn_Increment_Decrement(1)}>Increment</button>
          <button title='Decrement' onClick={()=> fn_Increment_Decrement(-1)}>Decrement</button>
        </>
      )
}