"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const command_1 = require("../function/command");
let n;
let a;
class Command {
    constructor({ name, aliases }) {
        n = name;
        a = aliases;
    }
    on(callback) {
        (0, command_1.command)(n, a, (res) => {
            callback(res);
        });
    }
    action(callback) {
        (0, command_1.command)(n, a, (res) => {
            callback(res);
        });
    }
}
exports.Command = Command;



