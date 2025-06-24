// src/controllers/carritoController.js
const Carrito = require('../models/carritoModel');

exports.agregarAlCarrito = async (req, res) => {
  const { IdCliente, CodigoProducto, Cantidad } = req.body;
  if (!IdCliente || !CodigoProducto || !Cantidad) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  try {
    await Carrito.agregarAlCarrito(IdCliente, CodigoProducto, Cantidad);
    res.status(200).json({ mensaje: 'Producto agregado al carrito correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar al carrito', detalles: error.message });
  }
};

// NUEVO controlador para quitar del carrito
exports.quitarDelCarrito = async (req, res) => {
  const { IdCliente, CodigoProducto } = req.body;
  if (!IdCliente || !CodigoProducto) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  try {
    await Carrito.quitarDelCarrito(IdCliente, CodigoProducto);
    res.status(200).json({ mensaje: 'Producto eliminado del carrito correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al quitar del carrito', detalles: error.message });
  }
};


exports.obtenerCarritoPorCliente = async (req, res) => {
  const idCliente = req.params.idCliente;

  try {
    const carrito = await Carrito.obtenerCarritoPorClienteSP(idCliente);
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el carrito', detalles: error.message });
  }
};

