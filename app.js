const express = require('express')
const cors = require('cors')

const companyRouter = require('./routes/company/company.router')
const productRouter = require('./routes/product/product.router')
const expenseRouter = require('./routes/expense/expense.router')

const app = express()

app.use(
  cors({
    origin: 'http://127.0.0.1:5500'
  })
)
app.use(express.json())
app.use('/company', companyRouter)
app.use('/product', productRouter)
app.use('/expense', expenseRouter)

module.exports = app
