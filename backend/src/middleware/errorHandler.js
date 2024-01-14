const errorTypes = require("../utils/errorTypes");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  const error = errorTypes[err.name] || {
    message: "Ocurrió un error en el servidor",
    statusCode: 500,
  };

  res.status(error.statusCode).json({
    error: error.name,
    message: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
