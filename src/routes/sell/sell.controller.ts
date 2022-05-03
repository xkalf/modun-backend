import { Response, Request } from 'express'
import Company from '../../Models/company.model'
import Sell from '../../Models/sell.model'

export const getSell = async (req:Request, res: Response) => {
  try {
    const sells = await Sell.find()
    if (!sells || sells.length === 0) return res.status(500).json('Sell not found')
    return res.status(500).json(sells)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createSell = async (req: Request, res: Response) => {
  try {
    const newSell = await new Sell(req.body)
    if (!newSell) return res.status(500).json('Can not Sell')
    if (!newSell.products || newSell.products.length === 0) return res.status(500).json('Products must have')

    const company = await Company.findById(req.body.company)
    if (!company) return res.status(500).json('Company not found')

    newSell.products.forEach(i => {
      const product = company.products.find(j => j.product.toString() === i.product.toString())
      if (!product) return res.status(500).json('Company does not have product')
      if (product.quantity < i.quantity) return res.status(500).json('Company product is less')
      product.quantity -= i.quantity
    })

    const savedCompany = await company.save()
    const savedSell = await newSell.save()
    if (!savedCompany) return res.status(500).json('Cannot save company')
    if (!savedSell) return res.status(500).json('Cannot save sell')

    return res.status(500).json(savedSell)
  } catch (error) {
    return res.status(500).json(error)
  }
}
