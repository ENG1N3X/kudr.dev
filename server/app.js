// const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const cardRoutes = require('./v1/routes/card.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/v1/card', cardRoutes)

module.exports = app
