"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const productRouter = (0, express_1.Router)();
productRouter.get('/', product_controller_1.getProduct);
productRouter.post('/', product_controller_1.createProduct);
productRouter.put('/:id', product_controller_1.updateProduct);
exports.default = productRouter;
