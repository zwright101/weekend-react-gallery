import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {

    const [galleryList, setGalleryList] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Take a look into my life!</p>
        <div>
          <GalleryList
          galleryList={galleryList}
          setGalleryList={setGalleryList}
          />
        </div>
      </div>
    );
}

export default App;
