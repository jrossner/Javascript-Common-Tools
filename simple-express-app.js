const ex = require('express')
const app = ex()
const port = 8080

app.get('/test', (req ,res) => {
  res.send("Hit endpoint")
})

app.get('/add', (req, res) => {
  a = Number(req.query.a)
  b = Number(req.query.b)
  res.send(`The total of ${a} + ${b} is ${a+b}`)
})

app.use(express.static('demo-visuals'))

app.listen(port, () => {
  console.log(`Simple App listening on port: ${port}`)
})

/* example queries:

  localhost:8080/test
  
  localhost:8080/add?a=1&b=2
  
  localhost:8080/simple.html
  */
