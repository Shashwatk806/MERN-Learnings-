import React, { useEffect, useRef } from 'react'

function MoreHook() {
    let salary = 50000; //variable, not a state (state will also show the same bahavior)

    let h1Ele = useRef(); //initialise

    useEffect(()=>{
        setTimeout(()=>{
            // document.getElementById('sal').innerHTML=33000; //way 1
            //better approach useRef()
            h1Ele.current.innerHTML = " Salary: 33000";
        },3000)
    }, [])
  return (
    <div>
        {/* <h1 id='sal'> Salary : {salary}</h1>  way-1*/}
        <h1 ref={h1Ele}>Salary: {salary}</h1>
    </div>
  )
}

export default MoreHook