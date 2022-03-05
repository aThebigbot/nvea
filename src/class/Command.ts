import { command } from "../function/command";
import process from "node:process";

let n:any;
class Command {
    constructor({ name }: { name: string }) {
        n = name;
    }
    on(callback:any) {
        command(n, (res:any) => {
            let req = {
                args: function(n: number) {
                    return process.argv[n];
                }
            }
            callback(res, req)

        });
    }
    action(callback:any) {
        command(n, (res:any) => {
            let req = {
                args: function(n: number) {
                    return process.argv[n];
                }
            }
            callback(res, req)

        });
    }
}
export { Command };