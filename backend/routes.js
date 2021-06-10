const express = require('express');
const SessionController = require('./src/controllers/SessionController');
const UserController = require('./src/controllers/UserController');
const authMiddleware = require('./src/middlewares/auth');

const routes = express.Router();

routes.post('/login', SessionController.store);
routes.post('/signup', UserController.store);

routes.get('/', authMiddleware, UserController.index);
routes.post('/', authMiddleware, UserController.store);

module.exports = routes;
