import { Request, Response } from 'express'
import { Types } from 'mongoose'
import Company from '../../Models/company.model'
import GroupProduct from '../../Models/groupProduct.model'
import Sell from '../../Models/sell.model'

export const getGroupProduct = async (req: Request, res: Response) => {
  try {
    const products = await GroupProduct.find()
    if (!products || products.length === 0) return res.status(500).json('Products not found')
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createGroupProduct = async (req:Request, res: Response) => {
  try {
    const newProduct = await new GroupProduct(req.body).save()
    if (!newProduct) return res.status(500).json('Can not create')
    return res.status(200).json(newProduct)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const purchaseGroupProduct = async (req: Request, res: Response) => {
  try {
    const { groupProductId, quantity, companyId }: {
      groupProductId: Types.ObjectId,
      quantity: number,
      companyId: Types.ObjectId
    } = req.body

    const groupProduct = await GroupProduct.findById(groupProductId)
    const company = await Company.findById(companyId)
    if (!groupProduct) return res.status(500).json('Group Product not found')
    if (!company) return res.status(500).json('Company not found')

    groupProduct.products.forEach(i => {
      const currentProduct = company.products.find(j => j.product === i.product)
      if (!currentProduct) return res.status(500).json('product not found')
      if (currentProduct.quantity > i.quantity * quantity) currentProduct.quantity -= i.quantity * quantity
      else return res.status(500).json('Product quantity less')
    })

    const newSell = await new Sell({
      products: groupProduct.products,
      company
    }).save()
    if (!newSell) return res.status(500).json('Can not sell')

    const savedCompany = await company.save()
    if (!savedCompany) return res.status(500).json('Can not save company')
    return res.status(200).json(newSell)
  } catch (error) {
    return res.status(500).json(error)
  }
}
