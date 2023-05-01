const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/homes', require('./homes'))
router.use('/generate', require('./generate'))

router.use((req, res, next) => {
  const error = new Error('Not Found server/api/index.js')
  error.status = 404
  next(error)
})

module.exports = router
