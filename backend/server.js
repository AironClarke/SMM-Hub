import express from 'express';
import cloudinaryRouter from './cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Use the imported router for the "/api" endpoint
app.use('/api', cloudinaryRouter);

app.listen(3000, () => console.log('Server running on port 3000'));