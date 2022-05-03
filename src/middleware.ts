import { Request, Response, NextFunction } from 'express'
import { Types } from 'mongoose'

import User from './Models/user.model'

export const checkPermission = (permissionId: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.body.user)
    if (!user) return res.status(500).json('user not found')
    if (user.permission.includes(new Types.ObjectId(permissionId))) {
      delete req.body.user
      next()
    } else {
      return res.status(500).json('You are not allowed')
    }
  }
}
