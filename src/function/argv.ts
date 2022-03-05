import process from "node:process";

function argv(n: number) {
    return process.argv[n];
}

export { argv }