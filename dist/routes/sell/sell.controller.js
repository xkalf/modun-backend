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
exports.createSell = exports.getSell = void 0;
const company_model_1 = __importDefault(require("../../Models/company.model"));
const sell_model_1 = __importDefault(require("../../Models/sell.model"));
const getSell = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sells = yield sell_model_1.default.find();
        if (!sells || sells.length === 0)
            return res.status(500).json('Sell not found');
        return res.status(200).json(sells);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getSell = getSell;
const createSell = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSell = yield new sell_model_1.default(req.body);
        if (!newSell)
            return res.status(500).json('Can not Sell');
        if (!newSell.products || newSell.products.length === 0)
            return res.status(500).json('Products must have');
        const company = yield company_model_1.default.findById(req.body.company);
        if (!company)
            return res.status(500).json('Company not found');
        newSell.products.forEach(i => {
            const product = company.products.find(j => j.product.toString() === i.product.toString());
            if (!product)
                return res.status(500).json('Company does not have product');
            if (product.quantity < i.quantity)
                return res.status(500).json('Company product is less');
            product.quantity -= i.quantity;
        });
        const savedCompany = yield company.save();
        const savedSell = yield newSell.save();
        if (!savedCompany)
            return res.status(500).json('Cannot save company');
        if (!savedSell)
            return res.status(500).json('Cannot save sell');
        return res.status(200).json(savedSell);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.createSell = createSell;
