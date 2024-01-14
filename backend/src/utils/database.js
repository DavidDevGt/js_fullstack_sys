const pool = require('../db');

// Función para ejecutar consultas SQL
async function dbQuery(query, params = []) {
  const [rows] = await pool.query(query, params);
  return rows;
}

// Función para obtener una fila de resultados como un array asociativo
async function dbFetchAssoc(query, params = []) {
  const rows = await dbQuery(query, params);
  return rows[0] || null;
}

// Función para obtener todas las filas de resultados en un array
async function dbFetchAll(query, params = []) {
  return await dbQuery(query, params);
}

// Función para obtener el número de filas en un conjunto de resultados
async function dbNumRows(query, params = []) {
  const rows = await dbQuery(query, params);
  return rows.length;
}

// Función para obtener un único valor de una consulta
async function dbFetchValue(query, params = []) {
  const row = await dbFetchAssoc(query, params);
  return row ? row[Object.keys(row)[0]] : null;
}

module.exports = {
  dbQuery,
  dbFetchAssoc,
  dbFetchAll,
  dbNumRows,
  dbFetchValue,
};
