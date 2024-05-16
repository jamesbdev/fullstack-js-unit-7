import React, { useEffect, useState}  from "react";
import Photo from "./Photo";
import Search from "./Search";
import { useParams } from "react-router";

//displays a gallery of photos
//it takes 3 props: 
// photos array, returned from a fetch request to the Flickr API
// title to display the gallery title
// in the case of the searched query it has a isLoading prop to check if the images are loading
const PhotoList = (props) => {
  const { searchParam } = useParams();

  //store array of photos
  const photos = props.photos;
 
  if (photos !== null && photos !== undefined) {
    return(
      <>
      {/* check if data is loading. If yes displays the loading message */}
        { props.isLoading ? <p>Loading...</p> : null }
        <div className="photo-container">
          <h2>{props.title}</h2>
          {/* Check if array of photos is empty. If yes, display error message */}
          { photos.length <= 0 ? <p>Sorry there are no matches for your search. Please try another keyword.</p> : null }
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