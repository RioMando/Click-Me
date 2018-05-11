import React from 'react';

import ImageCard from "./components/ImageCard";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import images from './images.json';


const App = () => (
  <div className="container">
    <Navbar />
    <Jumbotron />
    
    <ImageCard image={images[0].image} />
    <ImageCard image={images[1].image} />
    <ImageCard image={images[2].image} />
    <ImageCard image={images[3].image} />
    <ImageCard image={images[4].image} />
    <ImageCard image={images[5].image} />
    <ImageCard image={images[6].image} />
    <ImageCard image={images[7].image} />
    <ImageCard image={images[8].image} />
    <ImageCard image={images[9].image} />
    <ImageCard image={images[10].image} />
    <ImageCard image={images[11].image} />
  </div>
      
);

export default App;
