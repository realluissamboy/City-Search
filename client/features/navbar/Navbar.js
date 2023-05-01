import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <div>
          <Link to="/home">Home Values</Link>
          <Link to="/weather">Weather</Link>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Navbar
