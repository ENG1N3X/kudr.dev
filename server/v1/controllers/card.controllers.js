const Card = require('../models/card.model')

module.exports.getAll = async (req, res) => {
  try {
    const cards = await Card.find()
    res.json(cards)
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}
