import React from 'react'
import MainNavigation from './Components/MainNavigation'
import {Routes,Route} from 'react-router-dom'
import AllQuotes from './Components/AllQuotes'
import NewQuotes from './Components/NewQuotes'
import ShowQuote from './Components/ShowQuote'

function App() {
  return (
    <div>
     <MainNavigation />
     <main>
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/new" element={<NewQuotes />} />
        <Route path="/quotes/:id" element={<ShowQuote />} />
      </Routes>
      </main>
    </div>
    
   
  )
}

export default App