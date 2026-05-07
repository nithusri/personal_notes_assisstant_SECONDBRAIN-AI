import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

dotenv.config();

const app = express();

// Build allowed origins list
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://personal-notes-assisstant-secondbra-eight.vercel.app', // From error message
  'https://personal-notes-assistant-secondbrain-eight.vercel.app', // Corrected spelling
  ...(process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(',').map(o => o.trim()).filter(Boolean)
    : []),
];

console.log('[CORS] Allowed origins:', allowedOrigins);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (Postman, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.warn(`[CORS] Blocked request from origin: ${origin}`);
    return callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Handle preflight OPTIONS requests for ALL routes FIRST
app.options('*', cors(corsOptions));

// Apply CORS to all routes
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Personal AI API is running...');
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
