import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function NewQuotes() {
let navigate = useNavigate();
let usernameInputRef = useRef();
let quoteInputRef  = useRef();

async function addQuoteHandler(e){
  e.preventDefault();
  let author = usernameInputRef.current.value;
  let text = quoteInputRef.current.value;
  try {
    let res = await axios.post('http://localhost:8000/newquote',{author,text})
    usernameInputRef.current.value = "";
    quoteInputRef.current.value = "";
    navigate('/');
  } catch (e) {
    console.log("cannt create a quote",e)
  }
}

  return (
    <div>
      <form action="" onSubmit={addQuoteHandler}>
      <div>
          <label htmlFor="naam">Author:</label>
          <input type="text" id="naam" placeholder="Author's name" ref={usernameInputRef}/>
        </div>
        <div>
          <label htmlFor="txt">Quote:</label>
          <textarea id="txt" placeholder="Author's quote" ref={quoteInputRef}/>
        </div>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default NewQuotes
