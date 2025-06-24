// src/models/compraModel.js
const { poolPromise } = require('../config/database');

const Compra = {
  registrarCompra: async ({ IdCliente, IdUsuario }) => {
    const pool = await poolPromise;
    return await pool.request()
      .input('IdCliente', IdCliente)
      .input('IdUsuario', IdUsuario)
      .execute('sp_registrar_compra');
  },

  verDetalleCompra: async (idCompra) => {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('IdCompra', idCompra)
      .execute('sp_ver_detalle_compra');
    return result.recordset;
  },

  verComprasPorCliente: async (idCliente) => {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('IdCliente', idCliente)
      .query(`
        SELECT 
          IdCompra,
          Fecha,
          MontoTotal,
          Estado
        FROM Compras
        WHERE IdCliente = @IdCliente
        ORDER BY Fecha DESC
      `);
    return result.recordset;
  }
};

module.exports = Compra;
