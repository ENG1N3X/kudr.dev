const User = require('../models/user.model')
const moment = require('moment')

module.exports.create = async (req, res) => {
  try {
    const userFound = await User.findOne({ login: req.body.login })
    if (userFound) return res.status(302).json({ message: 'Данный логин уже используется!' })
    req.body.created = moment().format('HH-mm-ss-DD-MM-YYYY')
    await User.create(req.body)
    res.status(201).json({ message: 'Пользователь добавлен!' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка добавления пользователя.' })
  }
}

module.exports.remove = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Пользователь удален.' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка удаления данных.' })
  }
}

module.exports.update = async (req, res) => {
  try {
    const userFound = await User.findOne({ login: req.body.login })
    if (userFound) return res.status(302).json({ message: 'Данный логин уже используется!' })
    req.body.modified = moment().format('HH-mm-ss-DD-MM-YYYY')
    await User.updateOne({ _id: req.params.id }, req.body, { new: true })
    res.json({ message: 'Пользователь обновлен.' })
  } catch (e) {
    res.status(500).json({ message: 'Ошибка обновления данных.' })
  }
}

module.exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (e) {
    res.status(500).json({ message: 'Ошибка получения данных.' })
  }
}
