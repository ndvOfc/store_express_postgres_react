# SERVER
- Express
- Postgres
- JW Token
- Cors
- .env

## Initialize project
```
npm init -y
```
## Install initial packages
```
npm i express pg pg-hstore sequelize cors dotenv

```
## Install dev Dependencies & gitignore
```
npm i -D eslint nodemon

npx eslint --init

npx create-gitignore node

```
## Create environment .env
```
PORT=3000
DB_NAME=project_database
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```
## Create main app.js
```
// Обязательно подключаем конфигурацию окружения в самом начале!
require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 5000;

// Функция запуска сервера с обработчиком ошибки
const startServer = () => {
  try {
    app.listen(PORT, () => console.log(`>>>> Server started at ${PORT} port <<<<`));
  } catch (e) {
    console.log(e);
  }
};

startServer();
```
## Create database connect file (db/db.js)
```
require('dotenv').config();
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
);
```
## Create DB models (db/models/models.js)
- Create all table models and relations among theirs
- Exports all models
- add sequelize.sync() in start function for creat db
## Connect cors and json to main app (for requests from browser)
```
 const cors = require('cors')

 app.use(cors());
 app.use(express.json());
```

# CREATE STRUCTURE
### Routing
- Create routes
- Structure must be:
  - /routes
    - index.js route as main route 
      - on every handle create router (ex. userRouter, itemRouter etc.)

### Main route example: 
```
//! ГЛАВНЫЙ РОУТЕР
const router = require('express').Router();
const cardRouter = require('./cardRouter');
const itemRouter = require('./itemRouter');
const tagRouter = require('./tagRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/card', cardRouter);
router.use('/tag', tagRouter);
router.use('/item', itemRouter);

module.exports = router;
```
### Route example:
```
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
```
