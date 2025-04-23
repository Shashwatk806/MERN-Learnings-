import React from 'react'
import { Fragment } from 'react';
import { useState } from 'react';

function Counter() {

let [count, setCount] = useState(0);

function handleClick(){
    setCount(count+1);
}


  return (
    <Fragment>
    <div>
        <button onClick={()=>handleClick()}>Increase-{count}</button>
    </div>
    <h1>hello</h1>
    </Fragment>
  )
}

export default Counter