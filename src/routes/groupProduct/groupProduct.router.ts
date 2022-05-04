import { Router } from 'express'
import { createGroupProduct, getGroupProduct, purchaseGroupProduct } from './groupProduct.controller'

const GroupProductRouter = Router()

GroupProductRouter.get('/', getGroupProduct)
GroupProductRouter.post('/', createGroupProduct)
GroupProductRouter.post('/purchase', purchaseGroupProduct)

export default GroupProductRouter
