import React from "react";
import Photo from "./Photo";


const PhotoList = (props) => {
  const photos = props.photos;
  console.log(photos);
  if (photos !== null) {
    return(
      <div>
      <h2>{props.title}</h2>
      <div className="photo-container">
        <ul>
          { photos.map((photo, index) => {
            return <Photo key={index} photo={photo}/>;
          
          })}
        </ul>
      </div>
      </div>

    
  ) 
  } else {
    return (
      <div className="photo-container">
 
    </div>
    )
  }
   
}

export default PhotoList;