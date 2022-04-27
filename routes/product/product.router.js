const router = require('express').Router()
const { checkPermission } = require('../../middleware')
const { getProduct, createProduct, updateProduct } = require('./product.controller')

router.get('/', getProduct)
router.post('/', checkPermission('6268d7ee06dd5d359a69a73e'), createProduct)
router.put('/:id', updateProduct)

module.exports = router
