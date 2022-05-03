"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const companySchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
    products: [{
            product: { type: mongoose_1.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true },
            perCost: { type: Number, required: true }
        }],
    isAdmin: { type: Boolean, default: false }
}, {
    timestamps: true
});
const Company = (0, mongoose_1.model)('Company', companySchema);
exports.default = Company;
