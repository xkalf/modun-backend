import { Request, Response } from 'express'
import Product from '../../Models/product.model'

export async function getProduct (req: Request, res: Response) {
  try {
    const products = await Product.find()
    if (products) {
      return res.status(200).json(products)
    } else {
      return res.status(400).json('product not found')
    }
  } catch (err) {
    return res.status(400).json(err)
  }
}

export async function createProduct (req: Request, res: Response) {
  try {
    const newProduct = await new Product(req.body).save()
    if (newProduct) {
      return res.status(200).json(newProduct)
    } else {
      return res.status(400).json("Can't create product")
    }
  } catch (err) {
    return res.status(400).json(err)
  }
}

export async function updateProduct (req: Request, res: Response) {
  try {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      {
        new: true
      }
    )
    if (updatedProduct) return res.status(200).json(updatedProduct)
    else return res.status(400).json("Can't update")
  } catch (err) {
    return res.status(400).json(err)
  }
}

// async function deleteProduct (req, res) {
//   try {
//     const { id } = req.params
//     const deletedProduct = Product.findByIdAndDelete(id)
//     if (deletedProduct) return res.status(200).json(deletedProduct)
//     else return res.status(400).json("Can't delete")
//   } catch (err) {
//     return res.status(400).json(err)
//   }
// }
