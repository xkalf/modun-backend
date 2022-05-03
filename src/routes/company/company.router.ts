import { Router } from 'express'
import {
  getCompany,
  createCompany,
  sendToSector,
  updateCompany,
  getProducts
} from './company.controller'

const companyRouter = Router()

companyRouter.get('/', getCompany)
companyRouter.post('/', createCompany)
companyRouter.put('/:id', updateCompany)

companyRouter.get('/product/:id', getProducts)
companyRouter.post('/toSector', sendToSector)

export default companyRouter
