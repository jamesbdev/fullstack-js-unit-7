import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import { useParams } from "react-router";
import NoResults from "./NoResults";

//displays a gallery of photos
//takes 3 props:
// photos array, returned from a fetch request to the Flickr API
// title to display the gallery title
// in the case of the searched query it has a isLoading prop to check if the images are loading
const PhotoList = (props) => {
  const { searchParam } = useParams();

  //store array of photos
  const photos = props.photos;

  {/* checks for loading state and render loading message */}
  if (props.isLoading) {
    return <div> <h2>Loading...</h2></div>
    {/* check if the photo array is empty */}
  } else if (photos.length <= 0) {
    return (
      <NoResults />
    )

  } else {
    return (
      <>
        <div className="photo-container">
          <h2>{props.title}</h2>
          <ul>
            {/* iterate through photo array and display Photo component */}
            {photos.map((photo, index) => {
              return <Photo key={index} photo={photo} />;
              })}
          </ul>
        </div>
      </>
    )
  }

};

export default PhotoList;
