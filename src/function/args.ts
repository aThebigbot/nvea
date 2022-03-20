import process from 'node:process'

async function args(n: number) {
     return process.argv[n]
}

export { args }