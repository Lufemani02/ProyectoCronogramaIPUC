import express from 'express';
import connection from '../db/connection.js';

const router = express.Router();

// ✅ Ruta de prueba: obtener todos los cronogramas
router.get('/', (req, res) => {
  connection.query('SELECT * FROM cronogramasipuc.usuario', (err, results) => {
    if (err) {
      console.error('❌ Error al consultar cronogramas:', err);
      return res.status(500).json({ error: 'Error al obtener cronogramas' });
    }
    res.json(results);
  });
});

export default router;