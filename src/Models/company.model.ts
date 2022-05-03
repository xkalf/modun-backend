import { Schema, Types, model } from 'mongoose'

export interface ICompany {
  title: string,
  phone: string,
  email: string,
  address: string,
  products?: {
    product: Types.ObjectId,
    quantity: number,
    perCost: number
  }[]
  isAdmin: boolean
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
