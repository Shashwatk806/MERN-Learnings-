import React, { memo, useState } from 'react'

function Memo() {
    let [t,setT] =useState("hii memo")
    function handleClick(){
        setT(Math.floor(Math.random()*10));
    }
  return (
    <div>Memo
        <Mymemo titl= {t}/>
        <button onClick={handleClick}>Click</button>
        <Mymemo titl="hii memo" />
        <Mymemo titl="hii memo" />
    </div>
  )
}

// function Mymemo(props){
//     return(
//         <div>
//             <h1>Task:{props.titl}</h1>
//         </div>
//     )
// }

const Mymemo = memo(function (props){
    return(
        <div>
            <h1>Task:{props.titl}</h1>
        </div>
    )
})

export default Memo