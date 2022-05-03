import { Router } from 'express'
import { createSell, getSell } from './sell.controller'

const sellRouter = Router()

sellRouter.get('/', getSell)
sellRouter.post('/', createSell)

export default sellRouter
