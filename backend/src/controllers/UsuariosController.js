const Usuario = require("../models/Usuario");

const UsuariosController = {
  async obtenerTodos(req, res) {
    try {
      const usuarios = await Usuario.obtenerTodos();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener los usuarios", error });
    }
  },
  async obtenerPorId(req, res) {
    try {
      const usuario = await Usuario.obtenerPorId(req.params.id);
      if (usuario.data) {
        res.json(usuario);
      } else {
        res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ mensaje: "Error al obtener el usuario", error });
    }
  },

  async contarUsuarios(req, res) {
    try {
      const cantidad = await Usuario.contarUsuarios();
      res.json({ total: cantidad });
    } catch (error) {
      res.status(500).json({ mensaje: "Error al contar los usuarios", error });
    }
  },
};
