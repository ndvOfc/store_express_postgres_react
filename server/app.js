/* eslint-disable */
// Обязательно подключаем конфигурацию окружения в самом начале!
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db/db');
const models = require('./db/models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT ?? 5000;

const app = express();

// Подключаем cors для получения запросов с клиента
app.use(cors());

// Подключаем json для работы с json форматом
app.use(express.json());

// Подключаем основной роутер через /api
app.use('/api', router)

//Middleware для обработки ошибок обязательно должен быть в самом конце
app.use(errorHandler)

// Функция запуска сервера с обработчиком ошибки
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Проверяем подключение к БД
    //await sequelize.sync({ force: true }); // Синхронизируем отслеживание изменений в БД (force: true - насильно перезаписывает изменение, !!!при этом внесенные данные уничтожаются!!!)
    app.listen(PORT, () => console.log(`>>>> Server started at ${PORT} port <<<<`));
  } catch (e) {
    console.log(e);
  }
};

startServer()
