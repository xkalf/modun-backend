const mongoose = require('mongoose')

const sectorSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Company'
    },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    products: [
      {
        product: { type: mongoose.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 0 }
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Sector', sectorSchema)
