"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GroupProductSchema = new mongoose_1.Schema({
    products: [{
            product: { type: mongoose_1.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }],
    sellPrice: { type: Number, required: true },
    company: { type: mongoose_1.Schema.Types.ObjectId, required: true }
}, {
    timestamps: true
});
const GroupProduct = (0, mongoose_1.model)('GroupProduct', GroupProductSchema);
exports.default = GroupProduct;
