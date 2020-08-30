const Tuning = require('../models/tuning.model')

module.exports.create = async (req, res) => {
  try {
    await Tuning.create(req.body)
    res.status(201).json({ message: 'Настройки добавлены!' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка добавления настроек.' })
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Tuning.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Настройки удалены.' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка удаления настроек.' })
  }
}

module.exports.update = async (req, res) => {
  try {
    await Tuning.updateOne({ _id: req.params.id }, req.body, { new: true })
    res.json({ message: 'Настройки обновлены.' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка обновления настроек.' })
  }
}

module.exports.getById = async (req, res) => {
  try {
    const tuning = await Tuning.findById(req.params.id)
    const tuningData = {
      id: tuning._id,
      name: tuning.name,
      text: tuning.text
    }
    res.status(200).json(tuningData)
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const tunings = await Tuning.find()
    res.json(tunings)
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}
