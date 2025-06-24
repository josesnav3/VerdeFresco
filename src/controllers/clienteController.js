// src/controllers/clienteController.js
const Cliente = require('../models/clienteModel');

exports.registrarCliente = async (req, res) => {
  const { Nombre, Correo, Telefono, Direccion } = req.body;

  if (!Nombre || !Correo || !Telefono || !Direccion) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    await Cliente.registrarCliente({ Nombre, Correo, Telefono, Direccion });
    res.status(201).json({ mensaje: 'Cliente registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar cliente', detalles: error.message });
  }
};

exports.loginCliente = async (req, res) => {
    const { Correo, Contrasena } = req.body;
  
    if (!Correo || !Contrasena) {
      return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
    }
  
    try {
      const cliente = await Cliente.loginCliente({ Correo, Contrasena });
  
      if (!cliente) {
        return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
      }
  
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ error: 'Error en el login', detalles: error.message });
    }
  };
  
