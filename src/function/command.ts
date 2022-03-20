import process from 'node:process';

async function command(name: string, aliases: String[], callback: any) {
    if (process.argv[2] == name || process.argv[2] && aliases[0] && aliases.includes(process.argv[2])) {
        let arr: String[] = []
        for (let I: number = 0; I < process.argv.length; I++) {
            if (I > 1) {
                arr.push(process.argv[I])
            }
        }
        let res = {
            name: process.argv[2],
            args: arr
        }

        await callback(res)
    }
}

export { command }