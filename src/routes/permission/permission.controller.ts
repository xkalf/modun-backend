import { Request, Response } from 'express'
import Permission from '../../Models/permission.model'

export const getPermission = async (req: Request, res: Response) => {
  try {
    const authorities = await Permission.find()
    if (!authorities) return res.status(500).json('Permission not found')
    return res.status(200).json(authorities)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createPermission = async (req: Request, res: Response) => {
  try {
    const newPermission = await new Permission(req.body).save()
    if (!newPermission) return res.status(500).json("Can't create")
    return res.status(200).json(newPermission)
  } catch (error) {
    return res.status(500).json(error)
  }
}
