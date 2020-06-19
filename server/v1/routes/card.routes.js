const { Router } = require('express')
const router = Router()
// const busboyBodyParser = require('busboy-body-parser')

const { getById, getAll } = require('../controllers/card.controllers')

router.get('/getById/:id', getById)
router.get('/getAll', getAll)

module.exports = router
