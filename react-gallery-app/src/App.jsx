
import './App.css'
import apiKey from './config';
import Photo from './components/Photo';
import Nav from './components/Nav';
import Photolist from './components/PhotoList';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import { useNavigate, redirect, Route, Routes } from 'react-router-dom';


function App(props) {
  console.log("App component has been rendered");
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState('');
  let searchString = `/search/${title}`;

  //function to make call to Flickr API and return results
  const fetchData = async (queryText) => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryText}&per_page=24&format=json&nojsoncallback=1`);
    const data = await response.json();
    //sets Photo array with data from API call
    setPhotos(data.photos.photo);
    //sets the title state with the user input
  
    //console.log("data", data);
    setTitle(queryText);
  };

  //call fetch function inside the useEffect hook
  useEffect(()=> {
    fetchData("cats");
  }, []);


  return (
    <>
      {/* display Search and Nav for every view */}
     <Search search={fetchData} query={title}/>
     <Nav/>
     <Routes>
      {/* home route needs to redirect to first static route */}
      <Route path="/" element={<Photolist photos={photos} title={title}/>} />
      <Route path="/cats" element={<Photolist photos={photos} title={title}/>} />
      <Route path="/dogs" element={<Photolist photos={photos} title={title}/>} />
      <Route path="/city" element={<Photolist photos={photos} title={title}/>} />
      {/* how to make this route dynamic? */}
      <Route path={searchString} element={<Photolist photos={photos} title={title}/>} />
     </Routes>
  

 
  
     
    </>
  )
}

export default App
