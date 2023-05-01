import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { me } from './store'
import Weather from '../features/Weather/Weather'
import Home from '../features/home/Home'
import Search from '../features/Search/Search'

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
          element={<Search name="search" displayName="Search" />}
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
