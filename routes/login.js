const { Router } = require('express');
const { postLogin } = require('../controllers/login');

const login = Router();

login.post('/', postLogin);


module.exports = login;