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
exports.createPermission = exports.getPermission = void 0;
const permission_model_1 = __importDefault(require("../../Models/permission.model"));
const getPermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorities = yield permission_model_1.default.find();
        if (!authorities)
            return res.status(500).json('Permission not found');
        return res.status(200).json(authorities);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getPermission = getPermission;
const createPermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPermission = yield new permission_model_1.default(req.body).save();
        if (!newPermission)
            return res.status(500).json("Can't create");
        return res.status(200).json(newPermission);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.createPermission = createPermission;
