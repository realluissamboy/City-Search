const router = require('express').Router()
const {
  models: { Home },
} = require('../db')

router.get('/', async (req, res, next) => {
  const city = req.query.city // Get the city query parameter from the request

  try {
    let homes
    if (city) {
      // If the city parameter is present, filter by that city
      homes = await Home.findAll({
        where: { city: city },
      })
    } else {
      // Otherwise, return all homes
      homes = await Home.findAll()
    }
    res.json(homes)
  } catch (err) {
    next(err)
  }
})

module.exports = router
