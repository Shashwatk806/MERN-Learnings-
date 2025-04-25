import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Github({username}) {

    let [user, setUser] = useState({imgurl:"", followers:0, following:0});
    //api call
    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(async function(res){
           let data = await res.json();
        //    console.log(data);
        let {avatar_url, followers, following} =data;
        setUser(()=>{
            return {
                imgurl : avatar_url,
                followers:followers,
                following:following
            }
        })
        
        }) .catch(err => {
        console.error(err);
        // you might set some error state here
      });
    },[]) //staet/prop


  return (
    <div style={{ border: "2px solid black" }}>
        <img src={user.imgurl} alt="img" />
        <figure >
            <p>Username:{username}</p>
            <p>Followers:{user.followers}</p>
            <p>Following:{user.following}</p>
        </figure>
    </div>
  )
}

export default Github