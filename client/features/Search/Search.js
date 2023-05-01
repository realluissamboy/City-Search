import React, { useState } from 'react'
import Home from '../home/Home'
import Weather from '../Weather/Weather'

const Search = () => {
  const [city, setCity] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (event) => {
    setCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="component search">
      <h1 id="title">City Search</h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={city} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {isSubmitted && (
        <>
          <Home city={city} />
          <Weather city={city} />
        </>
      )}
    </div>
  )
}

export default Search
