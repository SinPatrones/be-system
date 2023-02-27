exports.success = function (req, res, message, status) {
  const statusCode = status || 200;
  const statusMessages = message || '';

  res.status(statusCode).json({
    error: false,
    status,
    body: statusMessages,
  });
}

exports.error = function (req, res, message, status) {
  const statusCode = status || 500;
  const statusMessages = message || '';

  res.status(statusCode).json({
    error: true,
    status,
    body: statusMessages,
  });
}
