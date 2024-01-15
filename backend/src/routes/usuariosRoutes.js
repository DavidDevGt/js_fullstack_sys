const express = require("express");
const UsuariosController = require("../controllers/UsuariosController");
const router = express.Router();

router.get("/usuarios", UsuariosController.obtenerTodos);
router.get("/usuarios/:id", UsuariosController.obtenerPorId);
router.get("/usuarios/contar", UsuariosController.contarUsuarios);

module.exports = router;