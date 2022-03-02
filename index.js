const { args } = require('./src/args')
const { command } = require('./src/command')

command("TEST", function(res) {
    console.log(res.args[0])
})

args((args) => {
    console.log(args[0])
})

