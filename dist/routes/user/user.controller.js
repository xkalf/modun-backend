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
exports.AddPermission = exports.createUser = exports.getUser = void 0;
const user_model_1 = __importDefault(require("../../Models/user.model"));
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find().populate('permission');
        if (!users)
            return res.status(500).json('User not found');
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield new user_model_1.default(req.body).save();
        if (!newUser)
            return res.status(500).json('cant create');
        return res.status(200).json(newUser);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.createUser = createUser;
const AddPermission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { permission } = req.body;
        const user = yield user_model_1.default.findById(id);
        if (!user)
            return res.status(500).json('User not Found');
        if (!user.permission)
            user.permission = permission;
        const savedUser = yield user.save();
        if (!savedUser)
            return res.status(500).json('Can not add Permission');
        return res.status(200).json('Successfully Added');
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.AddPermission = AddPermission;
