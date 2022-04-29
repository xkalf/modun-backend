const Fee = require('../../Models/fee.model')

async function getFee (req, res) {
  try {
    const fees = await Fee.find()
    if (!fees) return res.status(400).json('fee not found dude')
    return res.status(200).json(fees)
  } catch (err) {
    return res.status(400).json(err)
  }
}

async function createFee (req, res) {
  try {
    const newFee = await new Fee(req.body).save()
    if (!newFee) return res.status(400).json('Can not creat fee')
    else return res.status(200).json(newFee)
  } catch (err) {
    return res.status(400).json(err)
  }
}

module.exports = {
  getFee,
  createFee
}
