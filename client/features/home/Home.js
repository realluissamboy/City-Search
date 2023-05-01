import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHome } from './homeSlice'

const Home = ({ city }) => {
  const dispatch = useDispatch()
  const homes = useSelector((state) => state.homes)

  useEffect(() => {
    if (city) {
      dispatch(fetchHome(city))
    }
  }, [dispatch, city])
  return (
    <div className="component home">
      {homes.map((home) => (
        <div key={home.id}>
          <div>
            <h2>Real Estate</h2>
          </div>
          <p>
            {home.city} has a Zillow Home Value Index of $
            {home.homevalues.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Home
