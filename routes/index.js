const app = require('express').Router()
const todoRoutes = require('./todoRoutes')



app.use('/todo',todoRoutes )



module.exports = app