const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { environment, port } = require('./config/config');
const Git = require("nodegit");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Glack is the future');
});

app.listen(port, (req, res) => {
    console.log(`Server listening on port: ${port}`);
});