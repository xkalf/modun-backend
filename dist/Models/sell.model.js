"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sellSchema = new mongoose_1.Schema({
    products: [
        {
            product: { type: mongoose_1.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true },
            discount: { type: Number, default: 0 }
        }
    ],
    company: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    }
}, {
    timestamps: true
});
const Sell = (0, mongoose_1.model)('Sell', sellSchema);
exports.default = Sell;
