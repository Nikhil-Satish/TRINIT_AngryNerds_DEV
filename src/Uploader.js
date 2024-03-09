import React, {useState} from 'react';
import axios from 'axios';

function Uploader() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");
  
      const formData = new FormData();
      formData.append("trial.zip", file);
  
      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch("http://localhost:8000/upload", {
          method: "POST",
          body: formData,
        });
  
        const data = await result.json();
  
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="upload-file">
        <form onSubmit={handleUpload} encType='multipart/form-data'>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange} name='trial.zip'/>
          <button type="submit">Upload</button>
        </form>
    </div>
  );
}

export default Uploader;