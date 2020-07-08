const Card = require('../models/card.model')

module.exports.create = async (req, res) => {
  try {
    const fd = req.body
    await Card.create(fd)
    res.status(200).json({ message: 'Данные добавлены.' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Card.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Элемент удален.' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка удаления данных.' })
  }
}

module.exports.update = async (req, res) => {
  try {
    const fd = req.body
    await Card.updateOne({ _id: req.params.id }, fd, { new: true })
    res.json({ message: 'Данные обновленны.' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка обновления данных.' })
  }
}

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
