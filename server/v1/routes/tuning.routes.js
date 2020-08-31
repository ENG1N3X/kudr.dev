const { Router } = require('express')
const router = Router()

const { create, remove, update, getById, getAll } = require('../controllers/tuning.controller')

router.post('/create', create)
router.delete('/remove/:id', remove)
router.put('/update/:id', update)
router.get('/getById/:id', getById)
router.get('/getAll', getAll)

module.exports = router
