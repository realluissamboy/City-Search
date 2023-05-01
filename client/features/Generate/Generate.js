import React, { useState } from 'react'

export default function Generate() {
  const [cityInput, setCityInput] = useState('')
  const [result, setResult] = useState()

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
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        )
      }

      setResult(data.result)
      setCityInput('')
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
      alert(error.message)
    }
  }

  return (
    <div>
      <head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </head>

      <main>
        <img src="/dog.png" />
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
        <div>
          {result && (
            <>
              <h4>Suggestions for {cityInput}:</h4>
              <ul>
                {result.split(', ').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
