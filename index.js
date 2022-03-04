const cmd = require('./src/index')

new cmd.Command({ name: 'index' }).on((c) => {
    console.log(c)
})