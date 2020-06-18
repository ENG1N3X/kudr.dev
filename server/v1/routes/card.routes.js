const { Router } = require('express')
const router = Router()
const busboyBodyParser = require('busboy-body-parser')

const { getAll } = require('../controllers/card.controllers')

router.get('/getAll', getAll)

module.exports = router
