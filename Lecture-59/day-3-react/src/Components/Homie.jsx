import React from 'react'

function Homie() {
    let a = true;
    let b = false; // we cant see boolean value directly in react
  return (
    <div>
        <h1>{JSON.stringify(a)}</h1>
        <h1>{JSON.stringify(b)}</h1>
    </div>
  )
}

export default Homie