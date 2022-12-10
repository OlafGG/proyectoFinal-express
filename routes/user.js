const { Router } = require('express');
const { getuser, postUser, getoneuser, deleteUser, userPatch } = require('../controllers/user');


const user = Router();

user.get('/', getuser);
user.get('/oneuser', getoneuser);
user.post('/userspost', postUser);
user.delete('/', deleteUser);
user.patch('/', userPatch);


module.exports = user;