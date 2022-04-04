const ApiError = require('../error/ApiError');

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async registration(req, res) {

  }

  // eslint-disable-next-line class-methods-use-this
  async login(req, res) {

  }

  // eslint-disable-next-line class-methods-use-this,consistent-return
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
