import React from 'react'

function Person() {
    let num = Math.floor(Math.random()*10);
    let luckyNum = 7;
    // let el;
    // if(rn === luckyNum){
    //     el = <h1>lucky 7 !!</h1>
    // }else{
    //     <p>better luck next time</p>
    // }

  return (
    <div>
        <h2>hello sam {num}</h2>
      <h1>
      {num === luckyNum ? <h1>lucky 7 !!</h1> : <p>better luck next time</p>}
      </h1>
    </div>
  )
}

export default Person