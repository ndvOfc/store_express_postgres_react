const router = require('express').Router();

// Роут для создания тэгов
router.post('/tag');

// Роут для получения тэгов
router.get('/tag');

// Роут для изменения тэгов
router.put('/tag');

// Роут для удаления тэгов
router.delete('/');

module.exports = router;
