
import './App.css'
import apiKey from './config';
import Photo from './components/Photo';
import Nav from './components/Nav';
import Photolist from './components/PhotoList';
import Search from './components/Search';
import { useState, useEffect } from 'react';


function App() {
  const [photos, setPhotos] = useState(null);

  useEffect(()=> {
    const fetchData = async (queryText) => {
      const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryText}&per_page=24&format=json&nojsoncallback=1`);
      const data = await response.json();
      setPhotos(data.photos.photo);
    };

    fetchData("dog");
   
  }, []);


  return (
    <>
     <Search/>
     <Nav />
     <Photolist photos={photos} title={queryText}/>
     
    </>
  )
}

export default App
