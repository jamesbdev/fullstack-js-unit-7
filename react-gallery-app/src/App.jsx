
import './App.css'
import apiKey from './config';
import Photo from './components/Photo';
import Nav from './components/Nav';
import Photolist from './components/PhotoList';
import Search from './components/Search';



function App() {
  const fetchData = async (searchText) => {
    //fetch request
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`);
    const data = await response.json();
    console.log(data);
    return data.photos.photo;

  }

  fetchData("sky");
  return (
    <>
     <Search />
     <Nav />
     
    </>
  )
}

export default App
