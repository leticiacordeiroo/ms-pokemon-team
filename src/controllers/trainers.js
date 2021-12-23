const { trainersDomain } = require('../domains')
const asyncHandler = require('express-async-handler')

const createTrainer = asyncHandler(async (request, response, next) => {
  try {
    const { email, password } = request.body
    const newTrainer = { email, password }
    const result = await trainersDomain.createTrainerDomain(newTrainer)
    response.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = {
  createTrainer
}
