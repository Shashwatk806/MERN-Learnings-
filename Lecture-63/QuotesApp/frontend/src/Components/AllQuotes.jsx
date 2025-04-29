import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Quotes from '../quotes/Quotes';

function AllQuotes() {

  let [quotes,setQuotes] = useState([]);
  useEffect(function(){
  async function callApi(){
   const res = await axios.get('http://localhost:8000/allquotes')
  //  console.log(res.data)
  setQuotes(res.data);
  }
  callApi();
  },[])


  return (

    <div>All quotes
      <ul>
        {quotes.map((quote,index)=>{
          return (<Quotes id={quote._id} key={index} author={quote.author} text={quote .text}/>)
        })}
      </ul>
    </div>
  )
}

export default AllQuotes