const router = require('express').Router();

// Роут для создания карточек
router.post('/card');

// Роут для получения карточек
router.get('/card');

// Роут для изменения карточек
router.put('/card');

// Роут для удаления карточек
router.delete('/');

module.exports = router;
