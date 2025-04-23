
import React from 'react'
import Person from './Person'
import { useState } from 'react';

function Logout() {
    // let username = "kaushik";
    // function handleClick(){
    //     console.log((username));
    //     username = "Pandey";
    //     console.log(username);
    // }
    //state/variable, function
    let [username, setUsername] = useState("kaushik"); //hook

    function handleClick(){
        setUsername("anonymous");
    }

  return (
    <div>
        <h1>Logout page</h1>
      <Person name={username} age="24" color="blue" />
      <button onClick={handleClick}>Click me</button>
    </div>

  )
}

export default Logout;