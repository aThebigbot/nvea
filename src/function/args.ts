import process from 'node:process'

const args = (n: number) => {
     return process.argv[n]
}

export { args }