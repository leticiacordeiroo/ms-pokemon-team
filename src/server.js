const express = require('express')
const router = require('./routes')

const server = express()

server.use(express.json())

server.use('/api', router)

server.use((error, request, response, next) => {
  console.error(error.message)
  response.status(500).json({ message: 'internal error' })
})

module.exports = server
