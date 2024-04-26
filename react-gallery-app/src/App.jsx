
import './App.css'
import apiKey from './config';
import Photo from './components/Photo';
import Nav from './components/Nav';
import Photolist from './components/Photolist';
import Search from './components/Search';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <h1>Photo gallery</h1>
      <Search />
      <Nav />
      <Photolist />
     
    </>
  )
}

export default App
