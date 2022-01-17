data = {A: [1,2,3,4], B: [.1,.2,.3], C: [10,20,30,40]}

for (const [vrbl, obs] of Object.entries(data)) {
  console.log(`For variable: ${vrbl}, the data is: ${obs}`)
}

*/ prints:
  For variable: A, the data is: 1,2,3,4
  For variable: B, the data is: 0.1,0.2,0.3 
  For variable: C, the data is: 10,20,30,40
*/

data.A.forEach((element,i) => {
  console.log(`value: ${element} at index ${i}`)
  console.log(`${element} * ${i} = ${element*i}`)
})

/* prints: 
  value: 1 at index 0
  1 * 0 = 0
  value: 2 at index 1
  2 * 1 = 2
  value: 3 at index 2
  3 * 2 = 6
  value: 4 at index 3
  4 * 3 = 12
*/
