import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from '../features/auth/authSlice'
import weatherReducer from '../features/Weather/WeatherSlice'
import homeReducer from '../features/home/homeSlice'

const store = configureStore({
  reducer: { auth: authReducer, weather: weatherReducer, homes: homeReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export * from '../features/auth/authSlice'
