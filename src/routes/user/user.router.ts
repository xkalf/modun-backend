import { Router } from 'express'
import { createUser, getUser, AddPermission } from './user.controller'

const userRouter = Router()

userRouter.get('/', getUser)
userRouter.post('/', createUser)
userRouter.put('/:id', AddPermission)

export default userRouter
