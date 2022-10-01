//Importaciones
const express = require('express');
const app = express();
const cors = require('cors');

//Configuraciones
require('dotenv').config();
const PORT =  process.env.PORT || 5000;
app.use(cors());

//Conexión a MongoDB
const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log('Conexión exitosa a la base de datos'));

//Importación del routing
app.use('/', require('./routing'));

//Puesta del servidor en escucha
app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
