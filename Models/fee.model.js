const mongoose = require('mongoose')

const feeSchema = new mongoose.Schema({
  transport: { type: Number },
  customs: { type: Number },
  tax: { type: Number },
  logistic: { type: Number },
  other: { type: Number }
}, {
  timestamps: true
})

module.exports = mongoose.model('Fee', feeSchema)
