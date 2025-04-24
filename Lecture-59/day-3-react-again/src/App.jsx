import React from 'react'
import Person from './Components/Person'
import Events from './Components/Events'
import Student from './Components/Student'

function App() {
  return (
    <div>
       {/* <Person /> */}
      {/* <Events /> */}
      <Student name="kaushik" favColor="green" num="10" />
      <Student name="pandey" favColor="blue" num="20" />
      <Student name="amurt" favColor="black" num="30" />

    </div>
  )
}

export default App