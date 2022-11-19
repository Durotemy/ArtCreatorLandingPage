import React from "react";
import NavBar from "./component/NavBar/NavBar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import Card from "./component/Card/Card";
import ArtWork from "./component/ArtWorkCard/ArtWork.jsx";
import { Banner } from "./Banner.jsx";
import "./App.css";
function App() {
  return (
    <div className="body">
      <NavBar />
      <div className="hero">
        <Banner />
        <div className="cardContainer">
          <Card />
        </div>
        <div className="container">
          <div className="card">
            <ArtWork />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
