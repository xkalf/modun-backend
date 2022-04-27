const mongoose = require('mongoose')

const permissionSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Permission', permissionSchema)
