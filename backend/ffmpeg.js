import ffmpeg from 'fluent-ffmpeg';
import express from 'express';
import fetch from 'node-fetch'
import FormData from 'form-data';
import { PassThrough } from 'stream'; // 'stream' is the correct module
import dotenv from 'dotenv';

dotenv.config()

ffmpeg.setFfmpegPath('C:/Users/MAiro/Desktop/Q/bin/ffmpeg.exe'); // use forward slashe

const ffmpegRouter = express.Router()

ffmpegRouter.post('/extract-audio', async (req,res) => { //why async

  const {videoUrl} = req.body

  if(!videoUrl) {
    return res.status(400).json({error: 'No video URL provided'}) //why iu json?
  }

  //why ^ not in the catch

  try{
    const outputStream = new PassThrough()

    console.log('API Key:', process.env.OPENAI_API_KEY);

    ffmpeg()
      .input(videoUrl)
      .inputFormat('mp4')
      .audioCodec('libmp3lame')
      .audioBitrate('64k')
      .format('mp3') // Format as MP3
      .pipe(outputStream, { end: true });


    //Prepare the form data form wishper
    const formData = new FormData(); //how to use form data as a post
    formData.append('file', outputStream, { filename: 'audio.mp3'})
    //how do we knoe what to put in form?
    formData.append('model', 'whisper-1')

    //send the request to wisper API;
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        ...formData.getHeaders(),
      },
      body: formData,
    });

    const result = await response.json()
    //so the above code sends the request and this recives it?

    if(!response.ok){
      console.error('Wishper Error:', result) // why log two different responses
      return res.status(500).json({error: 'Whisper API error', detials: result})
      //status 500?
    }

    // respond witht he wispher response
    console.log(result)
    res.json(result)

  }catch (err){
    console.error('Error processing audio:', err.message)
    res.status(500).json({ error: 'Error processing audio' })
  }


})

export default ffmpegRouter
