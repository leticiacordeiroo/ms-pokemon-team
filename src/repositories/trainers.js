const knex = require('../database')

const create = async (newTrainer) => {
  const [firstRow] = await knex('trainers')
    .insert(newTrainer)
    .returning(['*'])
    .catch((error) => {
      throw error
    })
  return firstRow
}

module.exports = {
  create
}
