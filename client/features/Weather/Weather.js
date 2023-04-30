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

  return (
    <div>
      {weather.main && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  )
}

export default Weather
