"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = void 0;
const tslib_1 = require("tslib");
const node_process_1 = (0, tslib_1.__importDefault)(require("node:process"));
const args = (n) => {
    return node_process_1.default.argv[n];
};
exports.args = args;
