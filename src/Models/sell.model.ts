import { Types, Schema, model, Document } from 'mongoose'

export interface ISell extends Document {
  products? : {
    product: Types.ObjectId,
    quantity: Number,
    discount?: Number
  }[],
  company: Types.ObjectId
}

const sellSchema = new Schema<ISell>(
  {
    products: [
      {
        product: { type: Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        discount: { type: Number, default: 0 }
      }
    ],
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

const Sell = model('Sell', sellSchema)

export default Sell
