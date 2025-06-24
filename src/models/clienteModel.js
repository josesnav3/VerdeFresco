// src/models/clienteModel.js
const { poolPromise } = require('../config/database');

const Cliente = {
  registrarCliente: async ({ Nombre, Correo, Telefono, Direccion }) => {
    const pool = await poolPromise;
    return await pool.request()
      .input('Nombre', Nombre)
      .input('Correo', Correo)
      .input('Telefono', Telefono)
      .input('Direccion', Direccion)
      .execute('sp_registrar_cliente');
  },

  
    loginCliente: async ({ Correo, Contrasena }) => {
      const pool = await poolPromise;
      const result = await pool.request()
        .input('Correo', Correo)
        .input('Contrasena', Contrasena)
        .execute('sp_login_cliente');
      return result.recordset[0]; // devuelve un solo cliente
    }
  };
  



  
  

module.exports = Cliente;
