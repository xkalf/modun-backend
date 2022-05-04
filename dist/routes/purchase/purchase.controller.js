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
const company_model_1 = __importDefault(require("../../Models/company.model"));
function getPurchase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const purchases = yield purchase_model_1.default.find();
            if (purchases.length === 0 || !purchases) {
                return res.status(500).json('Purchase not found');
            }
            return res.status(200).json(purchases);
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
            if (!newPurchase)
                return res.status(500).json('Cannot create purchase');
            const company = yield company_model_1.default.findById(newPurchase.company);
            if (!company)
                return res.status(500).json('Company not found');
            const sumFee = newPurchase.transportFee + newPurchase.customsFee + newPurchase.taxFee + newPurchase.logisticFee + newPurchase.otherFee;
            const sumQuantity = newPurchase.products.reduce((a, b) => a + b.quantity, 0);
            const perFee = sumFee / sumQuantity;
            newPurchase.products.forEach((item) => {
                const products = company.products;
                const currentProduct = products.find(j => j.product.toString() === item.product.toString());
                console.log(currentProduct);
                if (!currentProduct) {
                    company.products.push({
                        product: item.product,
                        quantity: item.quantity,
                        perCost: item.costPrice / item.quantity + perFee
                    });
                }
                else {
                    currentProduct.quantity += item.quantity;
                    currentProduct.perCost = (currentProduct.perCost + (item.costPrice / item.quantity + perFee)) / 2;
                }
            });
            const savedCompany = yield company.save();
            if (!savedCompany)
                return res.status(500).json('cannot save company');
            return res.status(200).json(newPurchase);
        }
        catch (error) {
            return res.status(500).json(error);
        }
    });
}
exports.createPurchase = createPurchase;
