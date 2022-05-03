'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const router = (0, express_1.Router)()
const { checkPermission } = require('../../middleware')
const { getProduct, createProduct, updateProduct } = require('./product.controller')
router.get('/', getProduct)
router.post('/', checkPermission('6268d7ee06dd5d359a69a73e'), createProduct)
router.put('/:id', updateProduct)
exports.default = router
