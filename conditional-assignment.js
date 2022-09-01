// traditional
const x = 7
let result1;
if (x % 2 == 0) {
  result1 = "even";
} else {
  result1 = "odd";
}
// result1 = "odd"

// ternary
const y = 4;
let result2 = (y % 2 == 0) ? "even" : "odd";
// result2 = "even"

// logical
const z = null;
let result3 = z / 2 || null;
// result3 = null
