"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { getPermission, createPermission } = require('./permission.controller');
const router = (0, express_1.Router)();
router.get('/', getPermission);
router.post('/', createPermission);
exports.default = router;
