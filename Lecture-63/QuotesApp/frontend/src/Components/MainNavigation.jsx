import React from 'react'
import {Link} from 'react-router-dom'

function MainNavigation() {
  return (
    <nav>
        <h1>Main Quotes App</h1>
        <ul>
            <li>
                <Link to="/">All Quotes</Link>
            </li> 
            <li>
                <Link to="/new">New Quotes</Link>
            </li>
        </ul>
    </nav>
  )
}

export default MainNavigation