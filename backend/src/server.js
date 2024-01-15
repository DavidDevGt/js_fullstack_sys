require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const usuariosRoutes = require("./routes/usuariosRoutes");
const app = express();

app.use(express.json());

// Usar middleware para manejar errores
app.use(errorHandler);

// Rutas
app.use('/api', usuariosRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));