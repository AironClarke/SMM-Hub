import express from 'express';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const router = express.Router()

router.get('/get-signature', (req, res) => {
  const time = Math.floor(Date.now() / 1000);
  const timestamp = time.toString()

  // Generate the signature
  const signature = cloudinary.utils.api_sign_request(
    timestamp,
    process.env.CLOUDINARY_API_SECRET
  );

  res.json({
    timestamp,
    signature,
    apiKey: process.env.API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  })

})

export default router;


