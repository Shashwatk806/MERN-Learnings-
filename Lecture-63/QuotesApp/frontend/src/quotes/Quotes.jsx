import React from 'react'
import { useNavigate } from 'react-router-dom'

function Quotes(props) {
  let navigate = useNavigate();

  function showQuoteHandler(id) {

    // console.log("View full quote clicked!");
    navigate(`/quotes/${id}`)
  }
  return (
    <div>
        <li>
            <span>
                <h1>Author: {props.author}</h1>
                <h3>Text: {props.text}</h3>
            </span>
            <button onClick={()=>showQuoteHandler(props.id)}>View full Quote</button>
        </li>
    </div>
  )
}

export default Quotes