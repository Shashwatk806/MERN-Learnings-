import React from 'react'

function Events() {
    function handleClick(){
        console.log("hello frm Prince click event");
    }
function deletee(id){
    console.log(`this ${id} function is deleted`)
}

  return (
    <div>
        <button onClick={handleClick}>click me</button>
        <button onClick={()=>deletee(101)}>Delete</button>
    </div>
  )
}

export default Events