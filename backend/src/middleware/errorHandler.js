const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Ocurrió un error en el servidor');
}

module.exports = errorHandler;