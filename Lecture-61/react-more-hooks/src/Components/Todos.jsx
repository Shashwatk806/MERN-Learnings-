import React ,{useState,Fragment} from 'react'

function Todos() {
let arr = [{titl:"go to place 1", desc:"place 1 is amazing"},
            {titl:"go to place 2", desc:"place 3 is amazing"},
            {titl:"go to place 3", desc:"place 3 is amazing"}
]
  let  [arrays, setArrays] = useState(arr); 

  return (
    <div>Todos
        <SingleTodo todos={arrays}/>
    </div>
  )
}

function SingleTodo({todos}){
    return (
        <Fragment>
            {todos.map((item,index)=>{ 
                return (
                <Fragment key={index}>
                <h1>{item.titl}</h1>
                <h1>{item.desc}</h1>
                </Fragment>
                );
          } ) }
        </Fragment>
    );
}

export default Todos