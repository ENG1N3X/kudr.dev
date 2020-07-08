const { Router } = require('express')
const router = Router()
const busboyBodyParser = require('busboy-body-parser')

const { create, remove, update, getById, getAll } = require('../controllers/card.controllers')

router.post('/create', busboyBodyParser(), create)
router.delete('/remove/:id', remove)
router.put('/update/:id', busboyBodyParser(), update)
router.get('/getById/:id', getById)
router.get('/getAll', getAll)

module.exports = router
