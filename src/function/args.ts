import process from "node:process";

function args(callback:any) {
     let res = [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]]
     callback(res)
}

export { args }