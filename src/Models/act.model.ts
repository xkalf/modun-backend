import mongoose from 'mongoose'

interface IAct {
  _id: mongoose.Types.ObjectId,
  title: string,
  description: string,
  products: {
    product: mongoose.Types.ObjectId,
    quantity: number
  },
  user: mongoose.Types.ObjectId
}

const actSchema = new mongoose.Schema<IAct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  products: [{
    product: { type: mongoose.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Act', actSchema)
