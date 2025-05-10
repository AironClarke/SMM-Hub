const highlightKeyPoints = async (segments) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a content analysis assistant.
          Identify key points with their timestamps from the given video transcription.`,
        },
        {
          role: 'user',
          content: `Here is the transcription
          data:\n\n${JSON.stringify(segments, null, 2)}\n\nIdentify the key points with
          their timestamps and summarize them in a structured format. each of thsese key
          points should be a 10 second to 20 second cuts of the media submitted and i
          would like 3 of theses cuts. if you dont find enough key points
          then 2 is also accectable`,
        },
      ],
    }),
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
};

export default highlightKeyPoints