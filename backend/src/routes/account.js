const AccountController = require('../app/controllers/AccountController');
const express = require('express');
const route = express.Router();

route.post('/create', AccountController.createAccount);
route.get('/find', AccountController.getAccount);

module.exports = route;
