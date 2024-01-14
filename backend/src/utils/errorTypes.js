const errorTypes = {
  NotFoundError: {
    message: "Recursos no encontrados",
    statusCode: 404,
  },
  ForbiddenError: {
    message: "Prohibido",
    statusCode: 403,
  },
  UnauthorizedError: {
    message: "No autorizado",
    statusCode: 401,
  },
  ValidationError: {
    message: "Datos no validos",
    statusCode: 400,
  },
  ServiceUnavailableError: {
    message: "Servicio no disponible",
    statusCode: 503,
  },
};

module.exports = errorTypes;
