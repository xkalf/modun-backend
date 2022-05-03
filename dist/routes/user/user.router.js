"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_controller_1.getUser);
userRouter.post('/', user_controller_1.createUser);
userRouter.put('/:id', user_controller_1.AddPermission);
exports.default = userRouter;
