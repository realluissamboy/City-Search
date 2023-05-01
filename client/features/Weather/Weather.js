// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchWeather } from './WeatherSlice'

// const Weather = ({ city }) => {
//   const dispatch = useDispatch()
//   const weather = useSelector((state) => state.weather)

//   useEffect(() => {
//     dispatch(fetchWeather(city))
//   }, [dispatch, city])

//   const convertToFahrenheit = (kelvin) => {
//     const fahrenheit = (kelvin - 273.15) * 1.8 + 32
//     return fahrenheit.toFixed(1)
//   }

//   let weatherJoke = ''
//   if (weather.main) {
//     const temperature = convertToFahrenheit(weather.main.temp)
//     if (temperature > 80) {
//       weatherJoke =
//         "It's getting hot in here! So take off all your clothes... or at least wear some sunscreen!"
//     } else if (temperature >= 70 && temperature <= 80) {
//       weatherJoke = 'Perfect weather for a picnic or a nap in the park!'
//     } else if (temperature >= 60 && temperature <= 69) {
//       weatherJoke = 'Sweater weather is here, folks!'
//     } else {
//       weatherJoke =
//         "It's so cold, I saw a penguin running to Starbucks for a hot drink!"
//     }
//   }

//   return (
//     <div className="component weather">
//       {weather.main && (
//         <div>
//           <h2>Weather</h2>
//           <div>
//             <img
//               src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
//               alt="Weather icon"
//             />
//<div>The current temperature is {convertToFahrenheit(weather.main.temp)}
// °F and it feels like {convertToFahrenheit(weather.main.feels_like)}
// °F. The humidity is currently {weather.main.humidity}%.{' '}</div>
//             <div>{weatherJoke}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Weather

import React from 'react'

const Weather = ({ city }) => {
  // Dummy weather data
  const weather = {
    main: {
      temp: 293.15, // Temperature in Kelvin
      feels_like: 290.15, // Feels like temperature in Kelvin
      humidity: 50, // Humidity in percentage
    },
    weather: [
      {
        icon: '04d', // Weather icon code
      },
    ],
  }

  const convertToFahrenheit = (kelvin) => {
    const fahrenheit = (kelvin - 273.15) * 1.8 + 32
    return fahrenheit.toFixed(1)
  }

  let weatherJoke = ''
  if (weather.main) {
    const temperature = convertToFahrenheit(weather.main.temp)
    if (temperature > 80) {
      weatherJoke =
        "It's getting hot in here! So take off all your clothes... or at least wear some sunscreen!"
    } else if (temperature >= 70 && temperature <= 80) {
      weatherJoke = 'Perfect weather for a picnic or a nap in the park!'
    } else if (temperature >= 60 && temperature <= 69) {
      weatherJoke = 'Sweater weather is here, folks!'
    } else {
      weatherJoke =
        "It's so cold, I saw a penguin running to Starbucks for a hot drink!"
    }
  }

  return (
    <div className="component weather">
      {weather.main && (
        <div>
          <h2>Weather</h2>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <div>
              The current temperature is{' '}
              {convertToFahrenheit(weather.main.temp)}
              °F and it feels like{' '}
              {convertToFahrenheit(weather.main.feels_like)}
              °F. The humidity is currently {weather.main.humidity}%.{' '}
            </div>
            <div>{weatherJoke}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
