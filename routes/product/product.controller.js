const { getProducts, createProduct } = require('../../Models/product.model')

async function getAllProduct (req, res) {
  const products = await getProducts()
  if (products && products[0].length > 0) {
    res.status(200).json(products[0])
  } else {
    res.status(400).json('Product not found')
  }
}

async function createProductController (req, res) {
  const result = await createProduct(req.body)
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(400).json('error')
  }
}

module.exports = {
  getAllProduct,
  createProductController
}
