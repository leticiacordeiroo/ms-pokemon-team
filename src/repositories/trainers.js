const knex = require('../database')

const create = (newTrainer) => {
  return knex('trainers').insert(newTrainer).then(result => {
    console.log(result)
    return result
  }).catch((error) => {
    throw error
  })
}

module.exports = {
  create
}
