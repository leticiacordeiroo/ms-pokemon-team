const { trainersRepository } = require('../repositories')

const createTrainerDomain = (newTrainer) => {
  return trainersRepository.create(newTrainer)
}

module.exports = {
  createTrainerDomain
}
