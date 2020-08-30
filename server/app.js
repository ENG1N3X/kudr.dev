require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const cardRoutes = require('./v1/routes/card.routes')
const userRoutes = require('./v1/routes/user.routes')
const authRoutes = require('./v1/routes/auth.routes')
const tuningRoutes = require('./v1/routes/tuning.routes')

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.error('MongoDB connection error', e))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/v1/card', cardRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/tun', tuningRoutes)

module.exports = app
