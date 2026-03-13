const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let userName = "";

// GET request - show home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST request - receive name
app.post('/submit', (req, res) => {
    userName = req.body.name;
    res.redirect('/greeting');
});

// GET request - display greeting
app.get('/greeting', (req, res) => {
    res.send(`<h1>Hello, ${userName}!</h1><a href="/">Go Back</a>`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});