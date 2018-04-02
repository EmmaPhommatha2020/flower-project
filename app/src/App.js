import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Container from './components/Container';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Flower Land</h1>
          <div className="imgdiv">
            <img src="http://www.animated-gifs.eu/category_flora/flowers-daisies/0012.gif" alt="pic" />
          </div>
        </header>
        <div className="subheader">
          <h2 className="one">Flowers</h2>

          <h2 className="two">Favorite Flowers</h2>
        </div>

        <Container />

      </div>
    );
  }
}

export default App;
