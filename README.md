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

1. install the generator (if needed)

    npm install -g express-generator

    Error: Refusing to delete: /usr/local/bin/express

This happened because I tried to install without `sudo`, so the installation failed.  I tried again with `sudo` and it was complaining because the directory was already there.  Deleting the directory and installing again fixed it.

2. create the skeleton
    
    express foo

3. `npm install`

That's it.

## Add Ext JS

* download it
* extract it to /meen/public/javascripts/

It's all available by navigating to http://localhost:3000/javascripts/ext-4.2.1.883/, but a lot of it is docs and examples.

### Get just the good stuff.

Q: If I make a new dir in /public, is it automatically accessible?
A: Yep.

### Move all the Ext stuff into public so it can be referenced later.

Q: What are the key sources I need from the Ext download?
A: everything under resources, src, and one of the ext*.js files

Q: How do you add a script to the head using Jade?
A: `script(src='foo/bar.js')`

