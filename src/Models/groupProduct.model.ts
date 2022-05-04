import { Schema, Types, model } from 'mongoose'

export interface IGroupProduct {
  products: {
    product: Types.ObjectId,
    quantity: number,
  }[],
  sellPrice: number,
  company: Types.ObjectId
}

const GroupProductSchema = new Schema<IGroupProduct>({
  products: [{
    product: { type: Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  }],
  sellPrice: { type: Number, required: true },
  company: { type: Schema.Types.ObjectId, required: true }
}, {
  timestamps: true
})

const GroupProduct = model('GroupProduct', GroupProductSchema)

export default GroupProduct
