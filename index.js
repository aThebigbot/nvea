const { args } = require('./src/args')
const { argv } = require('./src/argv')
const { command } = require('./src/command')

command("TEST", function(res) {
    console.log(res.args[0])
})

args((args) => {
    console.log(argv(2))
})

