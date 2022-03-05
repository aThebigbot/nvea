import process from "node:process";

function command(name:string, callback:any) {
 if (process.argv[2] == name) {
     let res = {
         name: process.argv[2],
         args: [process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9], process.argv[10]]
     }
     callback(res)
 }
}

export { command }