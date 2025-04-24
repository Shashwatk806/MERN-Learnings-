
import React, { useState } from 'react'

function Maverick() {

    let [titl, setTitl] = useState("do bhau bhau")
    function handleTask(){
        setTitl(Math.floor(Math.random()*10));
    }

  return (
    <div>Maverick
        <Todo title={titl}/>
        <button onClick={handleTask}>Click me</button>
        <Todo title="hi five"/>
        <Todo title="sit"/>
        <Todo title="eat treat"/>

    </div>
  )
}

function Todo(props){

    return(
       <h1>Task: {props.title}</h1>
    )
}

export default Maverick