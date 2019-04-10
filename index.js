const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { environment, port } = require('./config/config');
const Git = require("nodegit");
var NodeGit = require("nodegit"); //root to "git init" in

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Glack is the future');
});

//chat to one users dms
app.get('/new-chat/:email', (req, res) => {
  //validate email here & check for existing repo with this email
    
  //new chat create here
  var pathToRepo = require('path').resolve('nodegit/' + req.params.email)
  var isBare = 0;
  NodeGit.Repository.init(pathToRepo, isBare).then(function (repo) {
      
  });
  
  //redirect here
  res.send('Create new git repo, redirect to chat screen to -> '+ req.params.email + ".git");
});

app.listen(port, (req, res) => {
  console.log(`Server listening on port: ${port}`);
});
