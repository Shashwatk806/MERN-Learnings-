import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function ShowQuote() {
    let [quote,setQuote] = useState({author:"", text:""})
    let params = useParams();
  useEffect(()=>{
    async function getQuote(){
      let res = await axios.get(`http://localhost:8000/quotes/${params.id}`)
      let {author,text} = res.data;
      setQuote({author,text});
         }
         getQuote();
  },[])
  return (
    <div>
        <h1>Author:{quote.author}</h1>
        <h2>Text:{quote.text}</h2>
    </div>
  )
}

export default ShowQuote