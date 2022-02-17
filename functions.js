// get root function
function rooter(value,root = 2) {
  ans = Math.pow(value,1/root)
  return ans
}

/* rooter(25) returns:
  5
*/

/* rooter(16,2) returns:
  4
*/

// to import function from another file:
const {rooter} = require("./function")

// get sum of all elements in a 1D array
function arrayTotal(array) {
  return array.reduce(function(a,b) { return a+b }, 0)
}

// to export functions
module.exports = {
                  rooter,
                  arrayTotal
                 }
