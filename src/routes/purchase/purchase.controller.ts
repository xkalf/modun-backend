import { Request, Response } from 'express'
import Purchase from '../../Models/purchase.model'
import Company from '../../Models/company.model'

export async function getPurchase (req: Request, res: Response) {
  try {
    const purchases = await Purchase.find()
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

    const company = await Company.findById(newPurchase.company)
    if (!company) return res.status(500).json('Company not found')

    const sumFee =
      newPurchase.transportFee +
      newPurchase.customsFee +
      newPurchase.taxFee +
      newPurchase.logisticFee +
      newPurchase.otherFee
    const sumQuantity = newPurchase.products.reduce((a, b) => a + b.quantity, 0)
    const perFee = sumFee / sumQuantity

    newPurchase.products.forEach((item) => {
      company.products.push({
        product: item.product,
        quantity: item.quantity,
        perCost: item.costPrice / item.quantity + perFee
      })
    })

    const savedCompany = await company.save()
    if (!savedCompany) return res.status(500).json('cannot save company')

    if (!newPurchase) return res.status(500).json("Can't create")
    return res.status(200).json(newPurchase)
  } catch (error) {
    return res.status(500).json(error)
  }
}
