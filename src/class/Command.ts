import { command } from "../function/command";

let n:any;
class Command {
    constructor({ name }: { name: string }) {
        n = name;
    }
    on(callback:any) {
        command(n, (res:any) => {
            callback(res)
        });
    }
    action(callback:any) {
        command(n, (res:any) => {
            callback(res)
        });
    }
}
export { Command };