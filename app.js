const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());

//middlaware por comnfigurar la cabecera CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//rutas de la API
app.use('/api', routes);

//Puertos
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor API a la espera de consulta, por el puerto ${PORT}`);
});