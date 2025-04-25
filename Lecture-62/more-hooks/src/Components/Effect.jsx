import React from 'react'
import { useState } from 'react';

function Effect() {
    let[d, setD] = useState("")
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(async function(res){
        let data = await res.json();
        console.log(data, "api fetched");
        // setD(data) // this will give infinite render(maybe error sometimes)
    })

  return (
    <div>
        Api called -{JSON.stringify(d)}
    </div>
  )
}

export default Effect