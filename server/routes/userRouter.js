const router = require('express').Router();
const userController = require('../controllers/userController');

// Роут для регистрации
router.post('/registration', userController.registration);

// Роут для логина
router.post('/login', userController.login);

// Роут для проверки авторизации пользователя
router.get('/auth', userController.check);

module.exports = router;
