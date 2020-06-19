const Card = require('../models/card.model')

module.exports.getById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id)
    res.status(200).json(card)
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const cards = await Card.find()
    res.json(cards)
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}
