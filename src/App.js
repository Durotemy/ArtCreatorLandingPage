import React from 'react';
import NavBar from "./component/NavBar/NavBar.jsx"
import Hero from "./component/Hero/Hero.jsx";
import Card from "./component/Card/Card";
import ArtWork from './component/ArtWorkCard/ArtWork.jsx';
import "./App.css";
function App() {
  return (
    <div className="body">
      <NavBar />
      <div className='hero'>
        <Hero />
        <Card />
        <ArtWork />
      </div>
    </div>
  );
}

export default App;
