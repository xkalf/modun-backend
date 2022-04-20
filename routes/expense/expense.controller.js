const { getExpenses, createExpense } = require('../../Models/fee.model')

async function getAllExpenses (req, res) {
  const expenses = await getExpenses()
  if (expenses && expenses[0].length > 0) {
    res.status(200).json(expenses[0])
  } else {
    res.status(400).json('Expense not found')
  }
}

async function createExpenseController (req, res) {
  const result = await createExpense(req.body)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(400).json('error')
  }
}

module.exports = {
  getAllExpenses, createExpenseController
}
