"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const purchaseSchema = new mongoose_1.Schema({
    products: [
        {
            product: { type: mongoose_1.Types.ObjectId, ref: 'Product' },
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
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    }
}, {
    timestamps: true
});
const Purchase = (0, mongoose_1.model)('Purchase', purchaseSchema);
exports.default = Purchase;
