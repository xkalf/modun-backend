const express = require('express')
const router = express.Router()
const { getAllExpenses, createExpenseController } = require('./expense.controller')

router.post('/', createExpenseController)
router.get('/', getAllExpenses)

module.exports = router
