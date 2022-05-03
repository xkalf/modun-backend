import { Router } from 'express'
import { getProduct, createProduct, updateProduct } from './product.controller'

const productRouter = Router()

productRouter.get('/', getProduct)
productRouter.post('/', createProduct)
productRouter.put('/:id', updateProduct)

export default productRouter
