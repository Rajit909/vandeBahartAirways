"use client"
import Image from 'next/image';
import {React, useState} from 'react'

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if(file){
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

  

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    try{
      const result = await response.json();
      if(result){
        setImageUrl(result.imageUrl);
      }else{
        setErrorMessage(result.message);
        console.log("Error uploading file");
      }
    }catch(error){
      setErrorMessage("Error uploading file");
      console.error("Error uploading file", error);
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      {
      imageUrl && (
        <div className='border w-50'>
          <p>Uploded image preweiw</p>
          <Image src={imageUrl} alt='uploded image' width={180} height={150} />
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
   
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default Profile
