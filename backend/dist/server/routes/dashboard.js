"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.dashboardRouter = express_1.default.Router();
exports.dashboardRouter.get('/*', (req, res) => {
    console.log('access granted');
    console.log(req.userIdAndEmail);
    res.sendStatus(200);
});
