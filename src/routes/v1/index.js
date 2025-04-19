const express = require('express');

const UserRouter = require('./users.routes');

const v1Router = express.Router();

// If any request comes and route continues with /users, we map it to UserRouter
v1Router.use('/users', UserRouter);

module.exports = v1Router;