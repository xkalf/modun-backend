"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const permissionSchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});
const Permission = (0, mongoose_1.model)('Permission', permissionSchema);
exports.default = Permission;
