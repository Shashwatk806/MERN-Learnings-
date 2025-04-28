import React, { useRef, useState } from 'react'

function CaseTwo() {

    const [count, setCount] = useState(0);

    let countRef = useRef(0);

     function handleClick1(){
        setCount(count+1); //0+1-> next render-2
        console.log(count); //0 render-1
        
     }

     function handleClick2(){
        countRef.current+=1;
        console.log(countRef.current);
        
     }
  return (
    <div>
        Count-1 : {count};<br />
        <button onClick={handleClick1}>Click-1</button> <br />
        Count-2 : {countRef.current} <br />
        <button onClick={handleClick2}>Click-2</button>
    </div>
  )
}

export default CaseTwo