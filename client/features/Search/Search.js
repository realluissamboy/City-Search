import React, { useState } from 'react'
import Home from '../home/Home'
import Weather from '../Weather/Weather'

const Search = () => {
  const [city, setCity] = useState('')

  const handleInputChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div>
      <h3>Search for a City</h3>
      <input type="text" value={city} onChange={handleInputChange} />
      {city && (
        <>
          <Home city={city} />
          <Weather city={city} />
        </>
      )}
    </div>
  )
}

export default Search
