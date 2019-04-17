const express = require('express');
const GitController = require('../controllers/git.controller');
const unauth = express.Router();

unauth
    .get('/new-chat/:email', GitController.newChat)

module.exports = unauth;

