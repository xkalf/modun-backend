"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const groupProduct_controller_1 = require("./groupProduct.controller");
const GroupProductRouter = (0, express_1.Router)();
GroupProductRouter.get('/', groupProduct_controller_1.getGroupProduct);
GroupProductRouter.post('/', groupProduct_controller_1.createGroupProduct);
exports.default = GroupProductRouter;
