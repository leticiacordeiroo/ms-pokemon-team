const express = require('express')
const trainersRouter = require('./trainers')

const router = express.Router()

router.use('/trainers', trainersRouter)

module.exports = router
