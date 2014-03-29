var express = require('express'),
    app = express(),
    server;

app.get('/', function (req, res) {
    res.send('Yo');
});

server = app.listen(3000);