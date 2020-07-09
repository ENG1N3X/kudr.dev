const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  login: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  admin: {
    type: Number,
    require: true
  },
  created: {
    type: String,
    require: true
  }
})

module.exports = new model('users', userSchema)
