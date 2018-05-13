import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import images from './images.json';
// import "./App.css"

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  // Map over thios.state.images and render a ImageCard component for each Image object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        {this.state.images.map(image => (
          <ImageCard 
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

 export default App;





