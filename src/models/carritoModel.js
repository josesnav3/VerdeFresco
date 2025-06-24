const { poolPromise } = require('../config/database');

const Carrito = {
  agregarAlCarrito: async (idCliente, codigoProducto, cantidad) => {
    const pool = await poolPromise;
    return await pool.request()
      .input('IdCliente', idCliente)
      .input('CodigoProducto', codigoProducto)
      .input('Cantidad', cantidad)
      .execute('sp_agregar_al_carrito');
  },

  quitarDelCarrito: async (idCliente, codigoProducto) => {
    const pool = await poolPromise;
    return await pool.request()
      .input('IdCliente', idCliente)
      .input('CodigoProducto', codigoProducto)
      .execute('sp_quitar_del_carrito');
  },

  obtenerCarritoPorClienteSP: async (idCliente) => {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('IdCliente', idCliente)
      .execute('sp_ver_carrito');
    return result.recordset;
  }
};

module.exports = Carrito;
