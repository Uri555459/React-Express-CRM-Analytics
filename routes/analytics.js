const express = require('express')
const controller = require('../controllers/analytics')
const router = express.Router()

router.get('/overviw', controller.overviw)
router.get('/analitics', controller.analitics)

module.exports = router
