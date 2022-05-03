import { Types, Schema, model, Document } from 'mongoose'

export interface IPurchase extends Document{
  products: {
    product: Types.ObjectId,
    quantity: number,
    costPrice: number
  }[],
  transportFee? : number,
  customsFee? : number,
  taxFee? : number,
  logisticFee?: number
  otherFee? : number,
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
    transportFee: { type: Number },
    customsFee: { type: Number },
    taxFee: { type: Number },
    logisticFee: { type: Number },
    otherFee: { type: Number },
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
