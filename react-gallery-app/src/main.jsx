import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photolist from './components/PhotoList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/dogs" element={<Photolist />} />
        <Route path="/cats" element={<Photolist />} />
        <Route path="/city" element={<Photolist />} />
        <Route path="/search/:query" element={<Photolist />} />
      </Routes>
   
    </BrowserRouter>
 
  </React.StrictMode>,
)
