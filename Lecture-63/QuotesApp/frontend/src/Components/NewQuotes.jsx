import React from 'react'

function NewQuotes() {

  return (
    <div>
      <form action="" onSubmit={handleFormSumbit}>
      <div>
          <label htmlFor="naam">Author:</label>
          <input type="text" id="naam" placeholder="Author's name"/>
        </div>
        <div>
          <label htmlFor="txt">Quote:</label>
          <textarea type="text" id="txt" placeholder="Author's quote"/>
        </div>
      </form>
    </div>
  )
}

export default NewQuotes
