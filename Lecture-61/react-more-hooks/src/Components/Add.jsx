import React,{Fragment,useState} from 'react'

function Add() {
let arr = [{titl:"go to place 1", desc:"place 1 is amazing"},
            {titl:"go to place 2", desc:"place 3 is amazing"},
            {titl:"go to place 3", desc:"place 3 is amazing"}
]
  let  [arrays, setArrays] = useState(arr); 


  return (
    <div>
        <AddTodo array={arrays} setArray={setArrays} />
        <Todo todos={arrays}/>
    </div>
  )
}

function AddTodo({array,setArray}){
let [inp1, setinp1] = useState("");
let [inp2, setinp2] = useState("");

    function handleAddTodo(){
        setArray([...array, {titl:inp1, desc:inp2}])
    }

    function changeinp1(e){
        setinp1(e.target.value);
    }

    function changeinp2(e){
        setinp2(e.target.value);
    }


    return(
        <div>
            <input onChange={changeinp1} type="text" value={inp1} />
            <input onChange={changeinp2} type="text" value={inp2} />

            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

function Todo({todos}){
    return(
        <div>
            {todos.map((item,index)=>{
                return(
                    <Fragment>
                        <h1>Title:{item.desc}</h1>
                        <h1>Desc: {item.titl}</h1>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default Add