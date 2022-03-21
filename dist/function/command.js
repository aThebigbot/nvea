"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const tslib_1 = require("tslib");
const node_process_1 = (0, tslib_1.__importDefault)(require("node:process"));
const command = async (name, aliases, callback) => {
    if (node_process_1.default.argv[2] == name || node_process_1.default.argv[2] && aliases[0] && aliases.includes(node_process_1.default.argv[2])) {
        let arr = [];
        for (let I = 0; I < node_process_1.default.argv.length; I++) {
            if (I > 1) {
                arr.push(node_process_1.default.argv[I]);
            }
        }
        let res = {
            name: node_process_1.default.argv[2],
            args: arr
        };
        await callback(res);
    }
};
exports.command = command;
