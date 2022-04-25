const router = require('express').Router()
const { getFee, createFee } = require('./fee.controller')

router.get('/', getFee)
router.post('/', createFee)

module.exports = router
