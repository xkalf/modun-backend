"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchase = exports.getPurchase = void 0;
const purchase_model_1 = __importDefault(require("../../Models/purchase.model"));
function getPurchase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const purchases = yield purchase_model_1.default.find().populate('products.product fee');
            if (purchases.length > 0)
                return res.status(200).json(purchases);
            else
                return res.status(500).json('Purchase not found');
        }
        catch (error) {
            return res.status(500).json(error);
        }
    });
}
exports.getPurchase = getPurchase;
function createPurchase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newPurchase = yield new purchase_model_1.default(req.body).save();
            // const company = await companyModel.findById(newPurchase.company)
            // const sumFee = newPurchase.transportFee + newPurchase.customsFee + newPurchase.taxFee + newPurchase.logisticFee + newPurchase.otherFee
            // const sumQuantity = newPurchase.products.reduce((a, b) => a.quantity + b.quantity, 0)
            if (newPurchase)
                return res.status(200).json(newPurchase);
            else
                return res.status(500).json("Can't create");
        }
        catch (error) {
            return res.status(500).json(error);
        }
    });
}
exports.createPurchase = createPurchase;
