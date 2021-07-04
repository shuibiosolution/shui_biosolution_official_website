const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/build/index.min.html");
})

app.get('/water', (req, res) => {
  res.sendFile(__dirname + "/build/water.min.html");
})

app.get('/earth', (req, res) => {
  res.sendFile(__dirname + "/build/earth.min.html");
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/build/about.min.html");
})

app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`)
})