// src/routes/compraRoutes.js
const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

// Registrar compra
router.post('/registrar', compraController.registrarCompra);

// Ver detalle de compra por ID
router.get('/detalle/:idCompra', compraController.verDetalleCompra);

// Ver compras por cliente
router.get('/cliente/:idCliente', compraController.verComprasPorCliente);

module.exports = router;
