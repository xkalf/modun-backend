const mongoose = require('mongoose')

const sectorSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Sector', sectorSchema)
