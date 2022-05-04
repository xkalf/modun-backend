"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sell_controller_1 = require("./sell.controller");
const sellRouter = (0, express_1.Router)();
sellRouter.get('/', sell_controller_1.getSell);
sellRouter.post('/', sell_controller_1.createSell);
exports.default = sellRouter;
