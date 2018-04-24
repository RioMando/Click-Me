import React from "react";

const Navbar = () => (

// <div class="page-header">
//   <h2>Click-Me Game <small>Click one time every one of the images, but be sure to not repeat the 
//       image or you will lost.</small></h2>
// </div>

  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand">
          Click-Me Game
        </a>
        <div className="navbar-text" id="display-text">Click an image to begin!</div>
        <div className="navbar-text">Score:<div id="score" /></div>
        <div className="navbar-text navbar-right">| Top Score: <div id="max-score" /></div>

      </div>
    </div>
  </nav>
);

export default Navbar;
