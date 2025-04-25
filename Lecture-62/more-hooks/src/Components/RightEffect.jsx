import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function RightEffect() {

    let [d, setD] = useState({
        type:"",
        setup:"",
        punchline:""
    });
    useEffect(()=>{ //it will protect from infinte rendering
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(function(res){
            // console.log(res);
            let {type, setup, punchline } = res.data;
            setD({type, setup, punchline })
        })    
    }, [])
   console.log("render");
   
  return (
    <div>
        <h3>Type:{d.type}</h3>
        <h1>Joke:{d.setup}</h1>
        <h2>Punchline:{d.punchline}</h2>
    </div>
  )
}

export default RightEffect