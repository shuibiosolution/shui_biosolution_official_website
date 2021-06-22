const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public/images/index'));
app.use(express.static(__dirname + '/public/images/water'));
app.use(express.static(__dirname + '/public/images/earth'));
app.use(express.static(__dirname + '/public/images/tech'));
app.use(express.static(__dirname + '/public/images/about'));
app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/build/index.min.html");
})

app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`)
})