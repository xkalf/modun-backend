const Purchase = require('../../Models/purchase.model')

async function getPurchase (req, res) {
  try {
    const purchases = await Purchase.find().populate('products.product fee')
    if (purchases.length > 0) return res.status(200).json(purchases)
    else return res.status(500).json('Purchase not found')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function createPurchase (req, res) {
  try {
    const newPurchase = await new Purchase(req.body).save()

    if (newPurchase) return res.status(200).json(newPurchase)
    else return res.status(500).json("Can't create")
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getPurchase,
  createPurchase
}
