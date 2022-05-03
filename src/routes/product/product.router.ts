import { Router } from 'express'
import { checkPermission } from '../../middleware'
import { getProduct, createProduct, updateProduct } from './product.controller'

const productRouter = Router()

productRouter.get('/', getProduct)
productRouter.post('/', checkPermission('6268d7ee06dd5d359a69a73e'), createProduct)
productRouter.put('/:id', updateProduct)

export default productRouter
