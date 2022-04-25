const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  products: [{
    product: { type: mongoose.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    costPrice: { type: Number, required: true },
    perCost: { type: Number, required: true }
  }],
  fee: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Fee' },
  company: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Company' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Purchase', purchaseSchema)
