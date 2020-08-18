const { Router } = require('express')
const router = Router()

const { getByLogin } = require('../controllers/auth.controller')

router.post('/getByLogin', getByLogin)

module.exports = router
