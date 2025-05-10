import express from 'express';
import cloudinaryRouter from './cloudinary.js';
import ffmpegRouter from './ffmpeg.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

// Use the imported router for the "/api" endpoint
app.use('/api/cloudinary', cloudinaryRouter);
app.use('/api/ffmpeg', ffmpegRouter)

app.listen(3000, () => console.log('Server running on port 3000'));