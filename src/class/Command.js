const { command } = require("../function/command");

let n;
class Command {
    constructor({ name }) {
        n = name;
    }
    on(callback) {
        command(n, (res) => {
            callback(res)
        });
    }
    action(callback) {
        command(n, (res) => {
            callback(res)
        });
    }
}

module.exports = Command;