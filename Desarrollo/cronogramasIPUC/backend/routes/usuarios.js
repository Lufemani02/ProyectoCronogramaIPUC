import express from 'express';
import connection from '../db/connection.js';

const router = express.Router();

// Obtener todos los usuarios
router.get('/', (req, res) => {
  connection.query('SELECT * FROM cronogramasipuc.usuario', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Crear nuevo usuario
router.post('/', (req, res) => {
  const { nombre, correo, rol } = req.body;
  connection.query(
    'INSERT INTO usuario (nombre, correo, rol) VALUES (?, ?, ?)',
    [nombre, correo, rol],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Usuario agregado con éxito', id: result.insertId });
    }
  );
});

export default router;