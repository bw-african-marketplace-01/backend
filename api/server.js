// General Imports
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const userRouter = require('./auth/user-router')

// Server uses
server.use(express.json())
server.use(helmet())
server.use(cors())

// Routers
server.use('/api/users', userRouter);


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server