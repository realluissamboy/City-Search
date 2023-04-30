const router = require('express').Router()
const {
  models: { Home },
} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const homes = await Home.findAll()
    res.json(homes)
  } catch (err) {
    next(err)
  }
})

module.exports = router
