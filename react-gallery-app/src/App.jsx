
import './App.css'
import apiKey from './config';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import NotFound from './components/NotFound';

//main component for the app
function App() {
  //state for search query photos
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState('');
  //state photos of static routes
  const [catPhotos, setCatPhotos] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [cityPhotos, setCityPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  //function to call for static request for pre-defined routes
  const fetchRequest = async (queryText) => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryText}&per_page=24&format=json&nojsoncallback=1`);
    const photoData = await response.json();
    const photoArray = photoData.photos.photo
  
    if (queryText == "cats") {
      setCatPhotos(photoArray);
    } else if (queryText == "dogs") {
      setDogPhotos(photoArray);
    } else if (queryText == "city") {
      setCityPhotos(photoArray);
    }
  
  }


  //function to make call to Flickr API and return results for when user uses search
  const fetchData = async (queryText) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryText}&per_page=24&format=json&nojsoncallback=1`);
      if(!response.ok) {
        throw new Error("Network response not ok");
      }
      const data = await response.json();
      //change state of Photos array
      setPhotos(data.photos.photo);
      //sets the title state with the user input
      setTitle(queryText);
      setIsLoading(false);
    } catch (error) {
      console.error("There is an issue with the fetch request", error);
    }
  };

  //call fetch function inside the useEffect hook
  useEffect(()=> {    
    //static route API calls
    fetchRequest("cats");
    fetchRequest("dogs");
    fetchRequest("city");
    
    const searchParam = location.pathname.substring(8);
  
    if (location.pathname.includes("search")) {
      fetchData(searchParam);
    }

  }, [location]);


  return (
    <>
      {/* display Search and Nav for every view */}
    
     <Search search={fetchData} query={title}/>
     <Nav search={fetchData} />
     <Routes>
      <Route path="/" element={<Navigate to="/cats" />} />
      <Route path="/cats" element={<PhotoList photos={catPhotos} title="cats"/>} />
      <Route path="/dogs" element={<PhotoList photos={dogPhotos} title="dogs"/>} />
      <Route path="/city" element={<PhotoList photos={cityPhotos} title="city"/>} />
      <Route path="/search/:query" element={<PhotoList isLoading={isLoading} photos={photos} title={title}/>} />
      <Route path="*" element={<NotFound />} />
     </Routes>

    </>
  )
}

export default App
