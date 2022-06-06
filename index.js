var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});


app.get('/home', function (req, res) {
    res.send('home page');
});

app.get('/about', function (req, res) {
    res.send('about page');
});

const data = [
    { 'name': 'Ben', 'id': 1 },
    { 'name': 'Susan', 'id': 2 },
    { 'name': 'Robert', 'id': 3 },
    { 'name': 'Mary', 'id': 4 },
    { 'name': 'Daniel', 'id': 5 },
    { 'name': 'Laura', 'id': 6 },
    { 'name': 'John', 'id': 7 },
    { 'name': 'Debra', 'id': 8 },
    { 'name': 'Aron', 'id': 9 },
    { 'name': 'Ann', 'id': 10 },
    { 'name': 'Steve', 'id': 11 },
    { 'name': 'Olivia', 'id': 12 }
];
app.get('/api/peoples', function (req, res) {
    res.send(data);
});

app.listen('3000');