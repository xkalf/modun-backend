const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const companyRouter = require('./routes/company/company.router')
const productRouter = require('./routes/product/product.router')
const feeRouter = require('./routes/fee/fee.router')
const sectorRouter = require('./routes/sector/sector.router')
const purchaseRouter = require('./routes/purchase/purchase.router')
const permissionRouter = require('./routes/permission/permission.router')
const userRouter = require('./routes/user/user.router')

const app = express()

app.use(
  cors({
    origin: 'http://127.0.0.1:5500'
  })
)
app.use(express.json())
app.use(morgan('combined'))
app.use('/company', companyRouter)
app.use('/product', productRouter)
app.use('/fee', feeRouter)
app.use('/sector', sectorRouter)
app.use('/purchase', purchaseRouter)
app.use('/permission', permissionRouter)
app.use('/user', userRouter)

module.exports = app
