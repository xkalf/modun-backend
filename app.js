const express = require('express')
const cors = require('cors')

const companyRouter = require('./routes/company/company.router')
const productRouter = require('./routes/product/product.router')
const feeRouter = require('./routes/fee/fee.router')
const sectorRouter = require('./routes/sector/sector.router')
const purchaseRouter = require('./routes/purchase/purchase.router')

const app = express()

app.use(
  cors({
    origin: 'http://127.0.0.1:5500'
  })
)
app.use(express.json())
app.use('/company', companyRouter)
app.use('/product', productRouter)
app.use('/fee', feeRouter)
app.use('/sector', sectorRouter)
app.use('/purchase', purchaseRouter)

module.exports = app
