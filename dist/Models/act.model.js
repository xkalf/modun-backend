"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const actSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    products: [{
            product: { type: mongoose_1.default.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }],
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
});
module.exports = mongoose_1.default.model('Act', actSchema);
