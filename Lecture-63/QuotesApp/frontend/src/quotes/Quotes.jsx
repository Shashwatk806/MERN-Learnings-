import React from 'react'

function Quotes(props) {
  function showQuoteHandler() {
    console.log("View full quote clicked!");
  }
  return (
    <div>
        <li>
            <span>
                <h1>Author: {props.author}</h1>
                <h3>Text: {props.text}</h3>
            </span>
            <button onClick={showQuoteHandler}>View in full page</button>
        </li>
    </div>
  )
}

export default Quotes