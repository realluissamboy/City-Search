// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchHome } from './homeSlice'

// const Home = ({ city }) => {
//   const dispatch = useDispatch()
//   const homes = useSelector((state) => state.homes)

//   useEffect(() => {
//     if (city) {
//       dispatch(fetchHome(city))
//     }
//   }, [dispatch, city])

//   return (
//     <div className="component home">
//       {homes.map((home) => (
//         <div key={home.id}>
//           <div>
//             <h2>Real Estate</h2>
//           </div>
//           <p>
//             {home.city} has a Zillow Home Value Index of $
//             {home.homevalues.toLocaleString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Home

import React from 'react'

const Home = ({ city }) => {
  // Dummy home data
  const homes = [
    {
      id: 1,
      city: 'San Francisco',
      homevalues: 1200000,
    },
    {
      id: 2,
      city: 'New York',
      homevalues: 900000,
    },
  ]

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
