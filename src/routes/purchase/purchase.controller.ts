import { Request, Response } from 'express'
import Purchase from '../../Models/purchase.model'
import Company from '../../Models/company.model'

export async function getPurchase (req: Request, res: Response) {
  try {
    const purchases = await Purchase.find().populate('company products.product')
    if (purchases.length === 0 || !purchases) { return res.status(500).json('Purchase not found') }
    return res.status(200).json(purchases)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export async function createPurchase (req: Request, res: Response) {
  try {
    const newPurchase = await new Purchase(req.body).save()
    if (!newPurchase) return res.status(500).json('Cannot create purchase')

    const company = await Company.findById(req.body.company)
    if (!company) return res.status(500).json('Company not found')

    const sumFee = newPurchase.transportFee + newPurchase.customsFee + newPurchase.taxFee + newPurchase.logisticFee + newPurchase.otherFee
    const sumQuantity = newPurchase.products.reduce((a, b) => a + b.quantity, 0)
    const perFee = sumFee / sumQuantity

    newPurchase.products.forEach((item) => {
      const products = company.products
      const currentProduct = products.find(j => j.product.toString() === item.product.toString())
      console.log(currentProduct)
      if (!currentProduct) {
        company.products.push({
          product: item.product,
          quantity: item.quantity,
          perCost: item.costPrice / item.quantity + perFee
        })
      } else {
        currentProduct.quantity += item.quantity
        currentProduct.perCost = (currentProduct.perCost + (item.costPrice / item.quantity + perFee)) / 2
      }
    })

    const savedCompany = await company.save()
    if (!savedCompany) return res.status(500).json('cannot save company')

    return res.status(200).json(newPurchase)
  } catch (error) {
    return res.status(500).json(error)
  }
}
