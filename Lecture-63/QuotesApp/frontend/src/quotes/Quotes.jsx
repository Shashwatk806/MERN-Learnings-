import React from 'react'

function Quotes(props) {
  return (
    <div>
        <li>
            <span>
                <h1>Aurhor: {props.author}</h1>
                <h3>Text: {props.text}</h3>
            </span>
            <button onClick={showQuoteHandler}>View in full page</button>
        </li>
    </div>
  )
}

export default Quotes