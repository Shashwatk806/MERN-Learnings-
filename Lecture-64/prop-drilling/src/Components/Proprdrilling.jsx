import React from 'react'
import { useState } from 'react'
import { CountContex } from './Contex';
import { useContext } from 'react';

function Proprdrilling() {
    let [count, setCount] =useState(0);
  return (
    <div>
        <CountContex.Provider value={count}>
        <Counting />
        <Buttons setCount={setCount} />

        </CountContex.Provider>

    </div>
  )
}

function Counting(){
    let count = useContext(CountContex);

    return (
        <div>
            <h3>Count:{count}</h3>
        </div>
    )
}

function Buttons({setCount}){
    let count = useContext(CountContex);

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>inc</button>
            <button onClick={()=>setCount(count-1)}>dec</button>
        </div>
    )
}




export default Proprdrilling