import React from 'react'
import { useCallback } from 'react';
import { memo } from 'react';
import { useState } from 'react'

function Call() {
    let[count,setCount] = useState(0);
// let a = 1; // same referencially
   

    let a = useCallback( function a(){ //not same referecially
        console.log("hi I am useCallback()");
    },[])

  return (
    <div>
        <Demo b={a}/>
        {/* <Demo b={count}/> */}
        <button onClick={()=>setCount(count+1)}>Click-{count}</button>
    </div>
  )
}

let Demo = memo(function ({b}){
    return(
        <div>
            {/* <h1>hii - {b}</h1> */}
            <h1>hii - {b()}</h1>
        </div>
    )
})

export default Call;