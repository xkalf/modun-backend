const express = require('express')
const router = express.Router()
const { getAllProduct, createProductController } = require('./product.controller')

router.post('/', createProductController)
router.get('/', getAllProduct)

module.exports = router
