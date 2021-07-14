const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

let postBody = [];

app.post("/contact", (req, res) => {
  console.log("Post:" + req.body);
  for (const item in req.body) {
    postBody.push(req.body[item]);
  }
  console.log(postBody)
})

app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`)
})