class ApiError extends Error {
  constructor(status, message) {
    super();
    // eslint-disable-next-line no-unused-expressions
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(404, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }
}

module.exports = ApiError;
