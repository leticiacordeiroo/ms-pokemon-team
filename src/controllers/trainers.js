const { trainersDomain } = require('../domains')

const createTrainer = async (request, response) => {
  const { email, password } = request.body
  const newTrainer = { email, password }
  const result = await trainersDomain.createTrainerDomain(newTrainer)
  response.json(result)
}

module.exports = {
  createTrainer
}
