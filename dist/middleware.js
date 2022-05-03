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
exports.checkPermission = void 0;
const mongoose_1 = require("mongoose");
const user_model_1 = __importDefault(require("./Models/user.model"));
const checkPermission = (permissionId) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_model_1.default.findById(req.body.user);
        if (!user)
            return res.status(500).json('user not found');
        if (user.permission.includes(new mongoose_1.Types.ObjectId(permissionId))) {
            delete req.body.user;
            next();
        }
        else {
            return res.status(500).json('You are not allowed');
        }
    });
};
exports.checkPermission = checkPermission;
