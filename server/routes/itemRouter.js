const router = require('express').Router();

// Отправка айтема
router.post('/item');

// Получение всех айтемов
router.get('/item');

// Получение одного айтема
router.get('/:id');

module.exports = router;
