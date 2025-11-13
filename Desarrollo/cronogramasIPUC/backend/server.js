import express from 'express';
import cors from 'cors';
import cronogramasRoutes from './routes/cronogramas.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/cronogramas', cronogramasRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});