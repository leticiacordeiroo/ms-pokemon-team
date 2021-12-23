const { trainersRepository } = require('../repositories')

const createTrainerDomain = async (newTrainer) => {
  return trainersRepository.create(newTrainer)
}

module.exports = {
  createTrainerDomain
}
