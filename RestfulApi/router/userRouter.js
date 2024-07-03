const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware.js');
const adminMiddleware = require('../middleware/adminMiddleware.js');
const userController = require('../controllers/userController.js');

router.get('/',[authMiddleware, adminMiddleware], userController.listAllUsers);

router.get('/me', authMiddleware , userController.loginedUserInfo);

router.patch('/me', authMiddleware , userController.loginedUserUpdate);

router.get('/:id', userController.getById);

router.post('/', userController.addUser);

router.post('/login', userController.getLogin);

router.patch('/:id', userController.updateUser);

router.delete('/deleteAll', [authMiddleware, adminMiddleware], userController.deleteAll);


router.delete('/me', authMiddleware, userController.selfDelete);

router.delete('/:id',[authMiddleware, adminMiddleware], userController.deleteUser);

module.exports = router;