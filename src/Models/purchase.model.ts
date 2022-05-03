import { Types, Schema, model, Document } from 'mongoose'

export interface IPurchase extends Document{
  products: {
    product: Types.ObjectId,
    quantity: number,
    costPrice: number
  }[],
  transportFee : number,
  customsFee : number,
  taxFee : number,
  logisticFee: number
  otherFee : number,
  company: Types.ObjectId
}

const purchaseSchema = new Schema<IPurchase>(
  {
    products: [
      {
        product: { type: Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        costPrice: { type: Number, required: true }
      }
    ],
    transportFee: { type: Number, default: 0 },
    customsFee: { type: Number, default: 0 },
    taxFee: { type: Number, default: 0 },
    logisticFee: { type: Number, default: 0 },
    otherFee: { type: Number, default: 0 },
    company: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Company'
    }
  },
  {
    timestamps: true
  }
)

const Purchase = model('Purchase', purchaseSchema)

export default Purchase
