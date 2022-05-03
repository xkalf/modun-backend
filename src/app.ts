import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import companyRouter from './routes/company/company.router'
import productRouter from './routes/product/product.router'
import purchaseRouter from './routes/purchase/purchase.router'
import permissionRouter from './routes/permission/permission.router'
import userRouter from './routes/user/user.router'

const app: Express = express()

app.use(
  cors({
    origin: 'http://127.0.0.1:5500'
  })
)
app.use(express.json())
app.use(morgan('combined'))
app.use('/company', companyRouter)
app.use('/product', productRouter)
app.use('/purchase', purchaseRouter)
app.use('/permission', permissionRouter)
app.use('/user', userRouter)

export default app
