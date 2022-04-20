const router = require('express').Router()
const { getCompany, createCompany } = require('./company.controller')

router.get('/', getCompany)
router.post('/', createCompany)

module.exports = router
