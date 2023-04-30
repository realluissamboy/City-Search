import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from './WeatherSlice'

const Weather = () => {
  const dispatch = useDispatch()
  const weather = useSelector((state) => state.weather)

  useEffect(() => {
    dispatch(fetchWeather())
  }, [dispatch])

  const convertToFahrenheit = (kelvin) => {
    const fahrenheit = (kelvin - 273.15) * 1.8 + 32
    return fahrenheit.toFixed(1)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const city = evt.target.city.value
    dispatch(fetchWeather(city))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">Enter City:</label>
          <input name="city" type="text" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {weather.main && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {convertToFahrenheit(weather.main.temp)}°F</p>
          <p>Feels like: {convertToFahrenheit(weather.main.feels_like)}°F</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  )
}

export default Weather
