import { Schema, model, Document } from 'mongoose'

export interface IProduct extends Document {
  title: String,
  unitPrice: Number
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  unitPrice: { type: Number, required: true }
}, {
  timestamps: true
})

const Product = model('Product', productSchema)

export default Product
