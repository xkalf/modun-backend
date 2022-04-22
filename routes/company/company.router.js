const router = require('express').Router()
const { getCompany, createCompany, addProduct, sendToSector, updateCompany, getProducts } = require('./company.controller')

router.get('/', getCompany)
router.post('/', createCompany)
router.put('/:id', updateCompany)

router.get('/product/:id', getProducts)
router.post('/product', addProduct)
router.post('/toSector', sendToSector)

module.exports = router
