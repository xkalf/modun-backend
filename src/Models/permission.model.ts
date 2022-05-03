import { Schema, model, Document } from 'mongoose'

export interface IPermission extends Document {
  name: string
}

const permissionSchema = new Schema<IPermission>(
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

const Permission = model('Permission', permissionSchema)

export default Permission
