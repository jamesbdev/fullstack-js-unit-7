import React, { useEffect, useState}  from "react";
import Photo from "./Photo";
import Search from "./Search";
import { useParams } from "react-router";


const PhotoList = (props) => {
  const { searchParam } = useParams();

  //store array of photos
  const photos = props.photos;
 
  if (photos !== null && photos !== undefined) {
    return(
      <>
        <div className="photo-container">
          <h2>{props.title}</h2>
          <ul>
            {/* iterate through photo array and display Photo component */}
            { photos.map((photo, index) => {
              return <Photo key={index} photo={photo}/>;
          
            })}
          </ul>
       </div>
      </>

    
  ) 
  } else {
    return (
      
      <div className="photo-container">
        <Search />
       <h2> photo is undefined</h2>
    </div>
    )
  }
   
}

export default PhotoList;