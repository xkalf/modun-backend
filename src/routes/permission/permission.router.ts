import { Router } from 'express'
import { getPermission, createPermission } from './permission.controller'

const permissionRouter = Router()

permissionRouter.get('/', getPermission)
permissionRouter.post('/', createPermission)

export default permissionRouter
