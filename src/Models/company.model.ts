import { Schema, Types, model } from 'mongoose'

export interface ICompany {
  title: String,
  phone: String,
  email: String,
  address: String,
  products?: {
    product: Types.ObjectId,
    quantity: number,
    perCost: Number
  }[]
  isAdmin: Boolean
}

const companySchema = new Schema<ICompany>({
  title: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  address: { type: String, required: true },
  products: [{
    product: { type: Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    perCost: { type: Number, required: true }
  }],
  isAdmin: { type: Boolean, default: false }
}, {
  timestamps: true
})

const Company = model('Company', companySchema)

export default Company
