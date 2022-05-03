"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { createPurchase, getPurchase } = require('./purchase.controller');
const router = (0, express_1.Router)();
router.get('/', getPurchase);
router.post('/', createPurchase);
exports.default = router;
