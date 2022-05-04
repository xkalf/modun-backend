"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import morgan from 'morgan'
const company_router_1 = __importDefault(require("./routes/company/company.router"));
const product_router_1 = __importDefault(require("./routes/product/product.router"));
const purchase_router_1 = __importDefault(require("./routes/purchase/purchase.router"));
const permission_router_1 = __importDefault(require("./routes/permission/permission.router"));
const user_router_1 = __importDefault(require("./routes/user/user.router"));
const sell_router_1 = __importDefault(require("./routes/sell/sell.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://127.0.0.1:5500'
}));
app.use(express_1.default.json());
// app.use(morgan('combined'))
app.use('/company', company_router_1.default);
app.use('/product', product_router_1.default);
app.use('/purchase', purchase_router_1.default);
app.use('/permission', permission_router_1.default);
app.use('/user', user_router_1.default);
app.use('/sell', sell_router_1.default);
exports.default = app;
