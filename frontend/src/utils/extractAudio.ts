const extractAudio = async (videoUrl: string) => {
  const res = await fetch('/api/ffmpeg/extract-audio', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({videoUrl})
  })

  if(res.ok) {
    const blob = await res.blob()
    const audioUrl = URL.createObjectURL(blob);
    console.log('Audio ready at:', audioUrl)
  }

}

//EXPLAIN THIS CODE POSTMAN

export default extractAudio