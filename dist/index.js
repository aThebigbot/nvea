"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.command = exports.argv = exports.args = void 0;
const Command_1 = require("./class/Command");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return Command_1.Command; } });
const args_1 = require("./function/args");
Object.defineProperty(exports, "args", { enumerable: true, get: function () { return args_1.args; } });
const argv_1 = require("./function/argv");
Object.defineProperty(exports, "argv", { enumerable: true, get: function () { return argv_1.argv; } });
const command_1 = require("./function/command");
Object.defineProperty(exports, "command", { enumerable: true, get: function () { return command_1.command; } });
