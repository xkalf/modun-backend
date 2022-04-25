const router = require('express').Router()
const { createPurchase, getPurchase } = require('./purchase.controller')

router.get('/', getPurchase)
router.post('/', createPurchase)

module.exports = router
