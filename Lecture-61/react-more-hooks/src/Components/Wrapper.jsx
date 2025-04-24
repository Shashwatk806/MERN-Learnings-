import React from 'react'

function WrapperComponent({comp}) {
  return (
    <div style={{border:"2px red solid", backgroundColor:"yellow"}}>
        {comp}
    </div>
  )
}

export function ChildComponent(){
    return (
        <div>
            <h1>Child hu mai</h1>
        </div>
    )
}
export function ChildComponent2(){
    return (
        <div>
            <h1>Child2 hu mai</h1>
        </div>
    )
}

export default WrapperComponent;