const process = require("node:process");

function argv(n) {
    return process.argv[n];
}

module.exports = { argv }