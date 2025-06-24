const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const carritoRoutes = require('./routes/carritoRoutes');
app.use('/api/carrito', carritoRoutes);

const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api/clientes', clienteRoutes);

const productoRoutes = require('./routes/productoRoutes');
app.use('/api/productos', productoRoutes);


const compraRoutes = require('./routes/compraRoutes');
app.use('/api/compras', compraRoutes);


module.exports = app;
