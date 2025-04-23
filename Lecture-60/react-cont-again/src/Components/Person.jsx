import React from 'react'

function Person(props) {
console.log(props);


  return (
    <div>
        <h2>Naam: {props.name}</h2>
        <h2>Umar: {props.age}</h2>
        <h2>Rang:{props.color}</h2>
    </div>
  )
}

export default Person







