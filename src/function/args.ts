import process from "node:process";

function args(n: number) {
     return process.argv[n];
}

export { args }