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

// to export function: 
module.exports = { rooter }

// to import function from another file:
const {rooter} = require("./function")
