import { Document, Schema, Types, model } from 'mongoose'

export interface IUser extends Document {
  _id: Types.ObjectId,
  name: string,
  email: string,
  password: string,
  permission: Types.ObjectId[],
  company: Types.ObjectId
}

const userSchema = new Schema<IUser>(
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
      type: Types.ObjectId,
      ref: 'Permission'
    }],
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

const User = model('User', userSchema)

export default User
