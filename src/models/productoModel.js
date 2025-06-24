const { poolPromise } = require('../config/database');


const Producto = {
    obtenerProductos: async () => {
      const pool = await poolPromise;
      const result = await pool.request().query(`
        SELECT CodigoProducto, Nombre, Descripcion, IdCategoria,
               Precio, Stock, Activo, FechaRegistro, NombreImagen
        FROM Productos
        WHERE Activo = 1
        ORDER BY FechaRegistro DESC
      `);
      return result.recordset;
    }
  };

module.exports = Producto;
