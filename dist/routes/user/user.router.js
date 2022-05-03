"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { createUser, getUser, AddPermission } = require('./user.controller');
const router = (0, express_1.Router)();
router.get('/', getUser);
router.post('/', createUser);
router.put('/:id', AddPermission);
exports.default = router;
