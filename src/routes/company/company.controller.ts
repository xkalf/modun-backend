import { Request, Response } from 'express'
import Company from '../../Models/company.model'
import User from '../../Models/user.model'
import { Types } from 'mongoose'

export async function getCompany (req: Request, res: Response) {
  try {
    const companies = await Company.find()
    if (companies) {
      return res.status(200).json(companies)
    } else {
      return res.status(500).json('company not found')
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function createCompany (req: Request, res: Response) {
  try {
    const newCompany = await new Company(req.body).save()
    if (newCompany) {
      return res.status(200).json('Created Successfully')
    } else {
      return res.status(500).json("Can't create company")
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function updateCompany (req: Request, res: Response) {
  try {
    const { id } = req.params
    const updatedCompany = Company.findByIdAndUpdate(
      id, {
        $set: req.body
      },
      {
        new: true
      }
    )
    if (updatedCompany) return res.status(200).json(updatedCompany)
    else return res.status(500).json("Can't update")
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function getProducts (req: Request, res: Response) {
  try {
    const { id } = req.params
    const company = await Company.findById(id).populate('products.product')
    if (company) return res.status(200).json(company.products)
    else return res.status(500).json('Company not found')
  } catch (error) {
    return res.status(500).json(error)
  }
}

interface ISendToSector {
      user: Types.ObjectId,
      sectorId: Types.ObjectId,
      product: Types.ObjectId,
      quantity: number
}

export async function sendToSector (req: Request, res: Response) {
  try {
    const { user, sectorId, product, quantity }: ISendToSector = req.body

    const currentUser = await User.findById(user)
    if (!currentUser) return res.status(500).json('User not found')

    const company = await Company.findById(currentUser.company)
    if (!company) return res.status(500).json('Company not found')
    if (!company.products) return res.status(500).json('Company products not found')

    const sector = await Company.findById(sectorId)
    if (!sector) return res.status(500).json('Sector not found')
    if (!sector.products) return res.status(500).json('Sector products not found')

    const companyProduct = company.products.find(el => el.product === product)
    const sectorProduct = sector.products.find(el => el.product === product)

    if (!companyProduct) return res.status(500).json('Product not found')

    if (companyProduct.quantity > quantity) companyProduct.quantity -= quantity
    else return res.status(500).json({ err: 'Company quantity less than' })

    if (sectorProduct) sectorProduct.quantity += quantity
    else sector.products.push({ product, quantity, perCost: companyProduct.perCost })

    await sector.save()
    await company.save()
    return res.status(200).json('Successfully sended')
  } catch (err) {
    return res.status(500).json(err)
  }
}
