import React, { useState } from 'react'

const Generate = ({ city }) => {
  const [cityInput, setCityInput] = useState('')
  const [result, setResult] = useState(null)

  async function onSubmit(event) {
    event.preventDefault()

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: cityInput }),
      })

      const data = await response.json()
      setResult(data)
      setCityInput('')
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
      alert(error.message)
    }
  }

  return (
    <div>
      <h3>Suggest me 3 things to do</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter a city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <input type="submit" value="Generate suggestions" />
      </form>
      {result && result.result && (
        <div>
          <h4>Suggestions for {cityInput}:</h4>
          <ul>
            {result.result.split(', ').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Generate
