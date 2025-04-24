import React, { useState } from 'react'

function Tida() {
  return (
    <div>
        <Head task="do roll" />
        <Head task="sit" />
        <Head task="hi five" />
        <BadaHead task="do jump" />
    </div>
  )
}

function Head({task}){
    return(
        <h1>Task:{task}</h1>
    )
}

function BadaHead({task}){

    let [t, setT] = useState("do jump");
    function handleClick(){
        setT(Math.floor(Math.random()*10));
    }

    return(
        <div>
            {/* <Head task={t}/> */}
        <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Tida