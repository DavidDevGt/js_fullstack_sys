const db = require("../utils/database");

class Usuario {
  constructor(usuarioData) {
    this.data = usuarioData;
  }

  // Traer todos los users
  static async obtenerTodos() {
    try {
      const resultado = await db.dbFetchAll(
        "SELECT * FROM usuarios WHERE active = 1"
      );
      return resultado.map((usuario) => new Usuario(usuario));
    } catch (error) {
      throw error;
    }
  }

  // Traer un user por id
  static async obtenerPorId(id) {
    try {
      const resultado = await db.dbFetchAssoc(
        "SELECT * FROM usuarios WHERE active = 1 AND id = ?",
        [id]
      );
      return new Usuario(resultado);
    } catch (error) {
      throw error;
    }
  }

  static async contarUsuarios() {
    try {
      return await db.dbNumRows("SELECT * FROM usuarios WHERE active = 1");
    } catch (error) {}
  }
}

module.exports = Usuario;