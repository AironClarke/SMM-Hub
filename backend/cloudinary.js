import express from 'express';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

router.get('/get-signature', (req, res) => {
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const folder = 'VideoSynth'

  // Generate the signature
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder },
    process.env.API_SECRET
  );

  res.json({
    timestamp,
    signature,
    folder,
    apiKey: process.env.API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  })

})

export default router;


