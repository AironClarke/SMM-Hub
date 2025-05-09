import uploadFile from '../utils/Upload'
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

//TODO: ACCECPT ONLY 1 FILE
//TODO: ACCECPT ONLY SUPPORTED FILE TYPES
//TODO: PREVIEW
//TODO: Styling

export default function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
        console.log('uplading videosynth')
        uploadFile(file)
        console.log('completed videosynth')
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections
  } = useDropzone(
    {
      onDrop,
      maxFiles:1,
      accept:{'video/mp4': []}
  })

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => {
   return (
     <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => <li key={e.code}>{e.message}</li>)}
         </ul>

     </li>
   )
  });

  return (
    <main className="text-stone-950 bg-stone-100">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <>
              <p>Drop the files here ...</p>
              <em>(1 file is the maximum you can drop here)</em>
              <em>(Only *.mp4 videos will be accepted)</em>
              <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
              </aside>
            </> :
            <>
              <p>Drag &apos;n&apos; drop some file here, or click to select file</p>
              <em>(1 files is the maximum you can drop here)</em>
              <em>(Only *.mp4 videos will be accepted)</em>
              <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
              </aside>
            </>
        }
      </div>
    </main>
  )
}
