import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./WeatherSlice";

const Weather = ({ city }) => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [dispatch, city]);

  const convertToFahrenheit = (kelvin) => {
    const fahrenheit = (kelvin - 273.15) * 1.8 + 32;
    return fahrenheit.toFixed(1);
  };

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
              The current temperature is{" "}
              {convertToFahrenheit(weather.main.temp)}
              °F and it feels like{" "}
              {convertToFahrenheit(weather.main.feels_like)}
              °F. The humidity is currently {weather.main.humidity}%.{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
