const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authRouter = require('../api/auth/auth-router')
const eventRouter = require('../api/event/event-router')

const server = express

server.use(helmet())

server.use(cors())

server.use(express.json()) 

server.use('/api/auth', authRouter)
server.use('/api/event',eventRouter)



server.use((err, req, res, next) => {
    //eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server 