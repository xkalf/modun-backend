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
exports.updateProduct = exports.createProduct = exports.getProduct = void 0;
const product_model_1 = __importDefault(require("../../Models/product.model"));
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield product_model_1.default.find();
            if (products) {
                return res.status(200).json(products);
            }
            else {
                return res.status(400).json('product not found');
            }
        }
        catch (err) {
            return res.status(400).json(err);
        }
    });
}
exports.getProduct = getProduct;
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newProduct = yield new product_model_1.default(req.body).save();
            if (newProduct) {
                return res.status(200).json(newProduct);
            }
            else {
                return res.status(400).json("Can't create product");
            }
        }
        catch (err) {
            return res.status(400).json(err);
        }
    });
}
exports.createProduct = createProduct;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedProduct = yield product_model_1.default.findByIdAndUpdate(id, {
                $set: req.body
            }, {
                new: true
            });
            if (updatedProduct)
                return res.status(200).json(updatedProduct);
            else
                return res.status(400).json("Can't update");
        }
        catch (err) {
            return res.status(400).json(err);
        }
    });
}
exports.updateProduct = updateProduct;
// async function deleteProduct (req, res) {
//   try {
//     const { id } = req.params
//     const deletedProduct = Product.findByIdAndDelete(id)
//     if (deletedProduct) return res.status(200).json(deletedProduct)
//     else return res.status(400).json("Can't delete")
//   } catch (err) {
//     return res.status(400).json(err)
//   }
// }
