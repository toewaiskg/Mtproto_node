const { application } = require('express');
var express = require('express');

const { login, sendCode, signIn } = require('./login');

var parseUrl = require('body-parser');

var app = express();


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
    res.send(JSON.stringify(data));
});

let encodeUrl = parseUrl.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/test', encodeUrl, (req, res) => {
    console.log('Form request:', req.body) //phone: 09xxxxxxx
    signIn(req.body.phone, req.body.code);
    //res.sendFile(__dirname + '/insertphoneandcodeform.html')
})


app.post('/login', encodeUrl, (req, res) => {

    sendCode(req.body.phone);
    // var data={"phone": req.body.phone}
    console.log('Form request:', req.body) //phone: 09xxxxxxx
    res.sendFile(__dirname + '/insertphoneandcodeform.html')
})


app.post('/codeConfirm', (req, res) => {

    // signIn(req.body.phone, req.body.code);
    console.log('Your phone code is ' + req.body) //code: 234567b


})



app.listen('3000', () => { 'the sersver is running....' });
//app.listen('http://192.168.100.27',3001, () => { 'the sersver is running....' });