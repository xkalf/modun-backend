"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const purchase_controller_1 = require("./purchase.controller");
const purchaseRouter = (0, express_1.Router)();
purchaseRouter.get('/', purchase_controller_1.getPurchase);
purchaseRouter.post('/', purchase_controller_1.createPurchase);
exports.default = purchaseRouter;
