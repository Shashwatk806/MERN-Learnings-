import React from 'react'
import MoreHook from './Components/MoreHook'
import CaseTwo from './Components/CaseTwo'
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'

function App() {


  return (
    <div>
     
      <BrowserRouter>
      <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

function Nav(){
  let navigate = useNavigate();
  function handleClick1(){
    // window.location.href="/" //not valid in react-> refesh kr deta hai
    navigate('/')
  }
  function handleClick2(){
    // window.location.href="/Product" 
    navigate('/Product')

  }
  return(
    <div>
      <div style={{backgroundColor:"grey", color:"maroon"}}>
      
      Navbar hu mai <br />
      <button onClick={handleClick1}>Home</button>
      <button onClick={handleClick2}>Product</button>
     </div>
    </div>
  )
}

export default App