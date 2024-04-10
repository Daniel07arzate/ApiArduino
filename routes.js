// route.js
const express = require('express');
const router = express.Router();
const connection = require('./db');

// Obtener todos los registros de datos del sensor
router.get('/datos', (req, res) => {
    connection.query('SELECT * FROM sensordata', (err, results) => {
        if (err) {  
            console.error('Error al obtener datos:', err);
            return res.status(500).json({ error: 'Error al obtener datos' });
        }
        // Mapear los resultados a la estructura de SensorData
        const sensorData = results.map(row => ({
          id: row.id,
          humidity: row.humedad,
          temperature: row.temperatura
        }));
        res.json({ success: true, message: 'Datos del sensor obtenidos correctamente', data: sensorData });
    });
});

// Agregar un nuevo registro de datos del sensor
router.post('/datos', (req, res) => {
    const { humedad, temperatura } = req.body;
    
    // Insertar los datos en la base de datos
    connection.query('INSERT INTO sensordata (humedad, temperatura) VALUES (?, ?)', [humedad, temperatura], (err, results) => {
        if (err) {  
            console.error('Error al insertar datos:', err);
            return res.status(500).json({ error: 'Error al insertar datos' });
        }
        res.json({ success: true, message: 'Datos insertados correctamente' });
    });
});

module.exports = router;
