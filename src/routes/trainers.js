const express = require('express')
const router = express.Router()
const { trainersController } = require('../controllers')

router.post('/', trainersController.createTrainer)

module.exports = router
