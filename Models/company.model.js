const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  title: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  address: { type: String, required: true },
  products: [{
    product: { type: mongoose.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    perCost: { type: Number, required: true }
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Company', companySchema)
