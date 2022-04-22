const router = require('express').Router()
const { getProduct, createProduct, updateProduct } = require('./product.controller')

router.get('/', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)

module.exports = router
