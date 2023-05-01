import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHome } from './homeSlice'

const Home = () => {
  const dispatch = useDispatch()
  const homes = useSelector((state) => state.homes)

  useEffect(() => {
    dispatch(fetchHome())
  }, [dispatch])

  return (
    <div>
      <h3>Home Values by City</h3>
      {homes.map((home) => (
        <div key={home.id}>
          <h4>{home.regionname}</h4>
          <p>Home Value: ${home.homevalues}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
