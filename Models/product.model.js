const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstPrice: { type: Number, required: true },
  fee: { type: mongoose.Schema.Types.ObjectId },
  company: { type: mongoose.Schema.Types.ObjectId },
  sector: { type: mongoose.Schema.Types.ObjectId },
  quantity: { type: Number, default: 0 },
  partnerName: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
