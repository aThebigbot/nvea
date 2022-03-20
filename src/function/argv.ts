import process from 'node:process';

async function argv(n: number) {
    return process.argv[n]
}

export { argv }