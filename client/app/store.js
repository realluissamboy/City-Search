import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from '../features/auth/authSlice'
import weatherReducer from '../features/Weather/WeatherSlice'

const store = configureStore({
  reducer: { auth: authReducer, weather: weatherReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export * from '../features/auth/authSlice'
