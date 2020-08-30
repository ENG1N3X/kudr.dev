const { model, Schema } = require('mongoose')

const tuningSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  }
})

module.exports = new model('tunings', tuningSchema)
