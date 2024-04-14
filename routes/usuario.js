const express = require('express')
const db = require('../database/connection')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

router.get('/usuario', async (req, res) => {
    try {
        const client = await db.connect();
        const result = await client.query('select * from ingeniero');
        const results = { 'data': (result) ? result.rows : null };
        res.json(results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

router.post('/usuario/registro', async (req, res) => {
    const { nombre, apellido_paterno, apellido_materno,comentario } = req.body;
console.log(nombre, apellido_paterno, apellido_materno,comentario)
    try {
        const client = await db.connect();
        const result = await client.query('INSERT INTO ingeniero (nombre, apellido_paterno, apellido_materno,comentario) VALUES($1,$2,$3,$4) RETURNING *', [nombre, apellido_paterno, apellido_materno,comentario]);

        console.log('Registro exitoso:', result.rows[0]);

        res.json({
            message: 'Registro exitoso',
            data: result.rows[0]
        });

        client.release(); // Liberar la conexión

    } catch (err) {
        console.error('Error al registrar usuario:', err);

        res.status(500).json({
            message: 'Error al registrar usuario'
        });
    }
});



module.exports = router;