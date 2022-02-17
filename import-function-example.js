// this works in NPM environment

// relative file path
path = './function.js'

// can use const or var to assign
const { rooter } = require(path)
var { arrayToTotal } = require(path)

// now you can use function
console.log(rooter(16))
console.log(arrayToTotal([1,2,3])
