const express = require('express');
const { UserController } = require('../../controllers/index');

const UserRouter = express.Router();

UserRouter.get('/ping',UserController.pingController); 
// UserRouter.get('/:id', UsertController.getUser);
// UserRouter.get('/', UsertController.getAllUsers);
// UserRouter.post('/',UsertController.addUser)
// UserRouter.delete('/:id',UsertController.deleteUser)
// UserRouter.put('/:id',UsertController.updateProblem)


module.exports = UserRouter;