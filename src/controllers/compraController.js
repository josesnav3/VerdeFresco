// src/controllers/compraController.js
const Compra = require('../models/compraModel');

exports.registrarCompra = async (req, res) => {
  const { IdCliente, IdUsuario } = req.body;

  if (!IdCliente || !IdUsuario) {
    return res.status(400).json({ error: 'IdCliente e IdUsuario son requeridos' });
  }

  try {
    await Compra.registrarCompra({ IdCliente, IdUsuario });
    res.status(201).json({ mensaje: 'Compra registrada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar la compra', detalles: error.message });
  }
};

exports.verDetalleCompra = async (req, res) => {
  const { idCompra } = req.params;

  try {
    const detalle = await Compra.verDetalleCompra(idCompra);
    res.status(200).json(detalle);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalle de compra', detalles: error.message });
  }
};

exports.verComprasPorCliente = async (req, res) => {
  const { idCliente } = req.params;

  try {
    const compras = await Compra.verComprasPorCliente(idCliente);
    res.status(200).json(compras);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener compras del cliente', detalles: error.message });
  }
};
