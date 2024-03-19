"use client"
import axios from "axios";
import React, { useState } from "react";

const Page = () => {
  const [images, setImages] = useState([]);
  

  const getimage = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      console.log(data); // Logging the fetched image data
      setImages(data); // Setting the fetched image data to the state
    } catch (error) {
      console.error("Error fetching image", error);
    }
  };

  return (
    <>
      <div></div>
      <h1>This is the default page</h1>
      <button id="button" onClick={getimage}>Get images</button>
      <div>
        {images.map((elem,i)=>{
         return <img key={i} src={elem.download_url}
         width={300}
         height={300}
         className="m-10 rounded inline-block"/>
        })}
      </div>
      
    </>
  );
};

export default Page;
