import process from 'node:process';

const argv = async (n: number) => {
    return process.argv[n]
}

export { argv }