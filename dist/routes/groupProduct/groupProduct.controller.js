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
exports.createGroupProduct = exports.getGroupProduct = void 0;
const groupProduct_model_1 = __importDefault(require("../../Models/groupProduct.model"));
const getGroupProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield groupProduct_model_1.default.find();
        if (!products || products.length === 0)
            return res.status(500).json('Products not found');
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getGroupProduct = getGroupProduct;
const createGroupProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield new groupProduct_model_1.default(req.body).save();
        if (!newProduct)
            return res.status(500).json('Can not create');
        return res.status(200).json(newProduct);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.createGroupProduct = createGroupProduct;
