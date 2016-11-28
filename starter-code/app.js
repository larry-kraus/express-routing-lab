var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// How do we 'require' the candyRouter file?
var candyRouter = require('./candyRouter');

app.use(bodyParser.json());

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candy', candyRouter);

app.listen(3000);