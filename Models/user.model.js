const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    },
    permission: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Permission'
    }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
