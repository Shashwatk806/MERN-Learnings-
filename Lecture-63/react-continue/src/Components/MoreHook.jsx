import React, { useEffect } from 'react'

function MoreHook() {
    let salary = 50000;

    useEffect(()=>{
        setTimeout(()=>{
            // document.getElementById('sal').innerHTML=33000; //way 1
            //better approach useRef()
            
        },3000)
    }, [])
  return (
    <div>
        <h1 id='sal'> Salary : {salary}</h1>
    </div>
  )
}

export default MoreHook