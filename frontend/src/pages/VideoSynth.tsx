import {useDropzone} from 'react-dropzone'

export default function VideoSynth(){

  const {getRootProps, getInputProps, isDragActive} = useDropzone()

  return (
    <main className="text-stone-950 bg-stone-100">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        }
      </div>
    </main>
  )
}