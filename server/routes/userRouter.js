const router = require('express').Router();

// Роут для регистрации
router.post('/registration');

// Роут для логина
router.post('/login');

// Роут для проверки авторизации пользователя
router.get('/auth');

module.exports = router;
