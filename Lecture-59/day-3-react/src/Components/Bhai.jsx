import React from 'react'

function Bhai() {
    let arr = [10,20,30,40];
    let obj ={a:10};
    let arr2 = [{a:100}, {a:200,b:400}, {a:300}];
  return (
    <div>
       {/* <h2>{arr}</h2>  */}
       {/* { <h1>{JSON.stringify(obj)}</h1> } */}
        {/* {obj.a} */}
        {
        arr2.map((item,index)=>{
            return Object.values(item).map((itm,idx)=>{
                return <h2>{itm}</h2>
            });
        })
        }
    </div>
  );
}

export default Bhai