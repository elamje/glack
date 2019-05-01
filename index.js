const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { environment, port } = require('./config/config');
const fs = require('fs');
const http = require('http');

const static = require('node-static');
const file = new static.Server('./client/views/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

require('./routes/routes.index.js')(app); 

//main page
app.get('/', (req, res) => {
  res.sendFile('./public/views/index.html', {root: __dirname});
});

//start server
app.listen(port, (req, res) => {
  console.log(`Server listening on port: ${port}`);
});