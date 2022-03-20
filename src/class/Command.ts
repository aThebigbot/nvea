import { command } from '../function/command';
import process from 'node:process';

let n: any
let a: any

class Command {
    constructor({ name, aliases }: { name: string, aliases: String[] }) {
        n = name
        a = aliases
    }

    on(callback: any) {
        command(n, a, (res: any) => {
            let req = {
                args: function(n: number) {
                    return process.argv[n];
                }
            }
            callback(res, req)

        })
    }

    action(callback: any) {
        command(n, a, (res: any) => {
            let req = {
                args: function(n: number) {
                    return process.argv[n];
                }
            }
            callback(res, req)
        })
    }
}
export { Command }