# Notes on creating the MEAN stack, minus Angular, plus Ext

## Create the basic scaffolding

[http://expressjs.com/guide.html](http://expressjs.com/guide.html)

1. create package.json
2. `npm install`
3. create a server.js file

That's all the scaffolding you technically need.

## Make server.js do something

1. require Express and create the app

    express = require('express');
    app = express();

2. create some routes

    app.get('/', function (req, res) {
        res.send('Yo');
    });

3. start listening for requests

    server = app.listen(3000);

That's it, but it's the sucker way.

## Use the generator

1. 