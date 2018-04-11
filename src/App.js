import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Images from "./components/Images";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

const App = () => (
  <div className="container">
    <Navbar />
    <Jumbotron />
    <Images />
  </div>
);

export default App;
