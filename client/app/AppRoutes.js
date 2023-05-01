import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { me } from './store'
import Weather from '../features/Weather/Weather'
import Home from '../features/home/Home'

const AppRoutes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={<Weather name="weather" displayName="Weather" />}
        />
        <Route
          path="/weather"
          element={<Weather name="weather" displayName="Weather" />}
        />
        <Route path="/home" element={<Home name="home" displayName="Home" />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
