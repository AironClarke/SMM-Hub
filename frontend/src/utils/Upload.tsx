const getCloudinarySignature = async () => {
  try {
    const res = await fetch('/api/get-signature')
    // const text = await res.text();
    // console.log('RAW RESPONSE:', text);
    if(!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }
    const data = await res.json()
    return data
  } catch(error) {
    console.error('Error fetching signature:', error)
  }

}


const uploadFile = async (file: File) => {
  console.log(`uploading ${file.name} ...`)

  // Get Cloudinary signature and data
  const {
    timestamp,
    signature,
    apiKey,
    cloudName
  } = await getCloudinarySignature();

  const formData = new FormData()
  formData.append('timestamp', timestamp)
  formData.append('api_key', apiKey)
  formData.append('file',file)
  formData.append('signature', signature)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {method: 'post', body: formData}
  )

  const video = await response.json()
  console.log(video)

  return video
}

export default uploadFile