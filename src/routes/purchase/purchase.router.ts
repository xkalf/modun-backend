import { Router } from 'express'
import { createPurchase, getPurchase } from './purchase.controller'

const purchaseRouter = Router()

purchaseRouter.get('/', getPurchase)
purchaseRouter.post('/', createPurchase)

export default purchaseRouter
