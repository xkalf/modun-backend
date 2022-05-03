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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermission = void 0;
const User = require('./Models/user.model');
const checkPermission = (permissionId) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User.findById(req.body.user);
        if (!user)
            return res.status(500).json('user not found');
        if (user.permission.includes(permissionId)) {
            delete req.body.user;
            next();
        }
        else {
            return res.status(500).json('You are not allowed');
        }
    });
};
exports.checkPermission = checkPermission;
