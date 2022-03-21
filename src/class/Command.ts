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
            callback(res)

        })
    }

    action(callback: any) {
        command(n, a, (res: any) => {
            callback(res)
        })
    }
}
export { Command }