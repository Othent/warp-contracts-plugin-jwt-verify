"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTVerifyPlugin = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JWTVerifyPlugin {
    process(input) {
        input.verify = jsonwebtoken_1.verify;
    }
    type() {
        return 'smartweave-extension-jwt-verify';
    }
}
exports.JWTVerifyPlugin = JWTVerifyPlugin;
