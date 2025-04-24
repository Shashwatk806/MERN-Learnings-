import React from 'react'

function ActualWrapper({children}) {
  return (
    <div style={{border:"2px red solid", backgroundColor:"grey"}}>
        {children}
    </div>
  )
}

export function ChotaWrapper({children}){
    return(
        <div>
            <h1>hello 1</h1>
            <h1>hello 2</h1>
            {children}
        </div>
    )
}

export default ActualWrapper