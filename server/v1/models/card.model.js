const { model, Schema } = require('mongoose')

const cardSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  image: {
    type: String
  },
  created: {
    type: String,
    require: true
  },
  modified: {
    type: String,
    require: true
  }
})

module.exports = new model('cards', cardSchema)
