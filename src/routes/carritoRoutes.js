// src/routes/carritoRoutes.js
const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// Ruta para agregar
router.post('/agregar', carritoController.agregarAlCarrito);

// NUEVA ruta para quitar
router.post('/quitar', carritoController.quitarDelCarrito);

//Ver Carrito
router.get('/:idCliente', carritoController.obtenerCarritoPorCliente);

module.exports = router;
