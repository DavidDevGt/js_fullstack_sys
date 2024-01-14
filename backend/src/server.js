require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(express.json());
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));