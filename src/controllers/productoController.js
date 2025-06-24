const Producto = require('../models/productoModel');

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos', detalles: error.message });
  }
};
