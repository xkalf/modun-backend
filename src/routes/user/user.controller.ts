import { Request, Response } from 'express'
import User from '../../Models/user.model'

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find().populate('permission')
    if (!users) return res.status(500).json('User not found')
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await new User(req.body).save()
    if (!newUser) return res.status(500).json('cant create')
    return res.status(200).json(newUser)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const AddPermission = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { permission } = req.body
    const user = await User.findById(id)

    if (!user) return res.status(500).json('User not Found')
    if (!user.permission) user.permission = permission
    const savedUser = await user.save()

    if (!savedUser) return res.status(500).json('Can not add Permission')
    return res.status(200).json('Successfully Added')
  } catch (error) {
    return res.status(500).json(error)
  }
}
