const router = require('express').Router()
const axios = require('axios')
const apiKey = require('../../secrets')

router.get('/', async (req, res, next) => {
  try {
    const city = 'New York'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await axios.get(url)
    const weatherData = response.data
    res.json(weatherData)
  } catch (err) {
    next(err)
  }
})

module.exports = router
