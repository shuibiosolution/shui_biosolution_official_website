const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const fs = require('fs')

mongoose.connect("mongodb+srv://shuibiosolution:shuibiosolution@cluster0.b04va.mongodb.net/messageDB?retryWrites=true&w=majority", { useNewUrlParser: true });

const messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model("Message", messageSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => {
    // read in the index.html file
    fs.readFile(__dirname + "/build/index.min.html", 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        // replace the special strings with server generated strings
        result = data.replace(/\$OG_IMAGE/g, 'https://live.staticflickr.com/65535/51341729015_5e40d93442_k.jpg');
        res.send(result);
    });
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

app.get('/en', (req, res) => {
    res.sendFile(__dirname + "/build/index.en.min.html");
})

app.get('/earth.en', (req, res) => {
    res.sendFile(__dirname + "/build/earth.en.min.html");
})

app.get('/water.en', (req, res) => {
    res.sendFile(__dirname + "/build/water.en.min.html");
})

app.get('/about.en', (req, res) => {
    res.sendFile(__dirname + "/build/about.en.min.html");
})

app.post("/contact", (req, res) => {
    console.log(req.body);
    let status = true;
    if (!messageValidation(req.body)) {
        console.log("Input data is illegal.");
        status = false;
    }
    else {
        Message.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        }, (error) => {
            if (error) {
                status = false;
                console.log(error);
            }
        });
    }
    res.send(status);
})

function messageValidation(message) {
    for (item in message) {
        if (message[item] === '') {
            return false;
        }
    }
    return true;
}

app.listen(port, () => {
    console.log(`Web app listening at http://localhost:${port}`)
})