const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  partnerName: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
