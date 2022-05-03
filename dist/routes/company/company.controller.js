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
exports.sendToSector = exports.getProducts = exports.updateCompany = exports.createCompany = exports.getCompany = void 0;
const company_model_1 = __importDefault(require("../../Models/company.model"));
const user_model_1 = __importDefault(require("../../Models/user.model"));
function getCompany(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const companies = yield company_model_1.default.find().populate('products.product');
            if (companies) {
                return res.status(200).json(companies);
            }
            else {
                return res.status(500).json('company not found');
            }
        }
        catch (err) {
            return res.status(500).json(err);
        }
    });
}
exports.getCompany = getCompany;
function createCompany(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCompany = yield new company_model_1.default(req.body).save();
            if (newCompany) {
                return res.status(200).json('Created Successfully');
            }
            else {
                return res.status(500).json("Can't create company");
            }
        }
        catch (err) {
            return res.status(500).json(err);
        }
    });
}
exports.createCompany = createCompany;
function updateCompany(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedCompany = company_model_1.default.findByIdAndUpdate(id, {
                $set: req.body
            }, {
                new: true
            });
            if (updatedCompany)
                return res.status(200).json(updatedCompany);
            else
                return res.status(500).json("Can't update");
        }
        catch (err) {
            return res.status(500).json(err);
        }
    });
}
exports.updateCompany = updateCompany;
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const company = yield company_model_1.default.findById(id).populate('products.product');
            if (company)
                return res.status(200).json(company.products);
            else
                return res.status(500).json('Company not found');
        }
        catch (error) {
            return res.status(500).json(error);
        }
    });
}
exports.getProducts = getProducts;
function sendToSector(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user, sectorId, product, quantity } = req.body;
            const currentUser = yield user_model_1.default.findById(user);
            if (!currentUser)
                return res.status(500).json('User not found');
            const company = yield company_model_1.default.findById(currentUser.company);
            if (!company)
                return res.status(500).json('Company not found');
            if (!company.products)
                return res.status(500).json('Company products not found');
            const sector = yield company_model_1.default.findById(sectorId);
            if (!sector)
                return res.status(500).json('Sector not found');
            if (!sector.products)
                return res.status(500).json('Sector products not found');
            const companyProduct = company.products.find(el => el.product === product);
            const sectorProduct = sector.products.find(el => el.product === product);
            if (!companyProduct)
                return res.status(500).json('Product not found');
            if (companyProduct.quantity > quantity)
                companyProduct.quantity -= quantity;
            else
                return res.status(500).json({ err: 'Company quantity less than' });
            if (sectorProduct)
                sectorProduct.quantity += quantity;
            else
                sector.products.push({ product, quantity, perCost: companyProduct.perCost });
            yield sector.save();
            yield company.save();
            return res.status(200).json('Successfully sended');
        }
        catch (err) {
            return res.status(500).json(err);
        }
    });
}
exports.sendToSector = sendToSector;
