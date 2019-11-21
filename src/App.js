import React from "react";
import Map from "./components/map";
import Selector from "./components/selector";
import "./styles/App.css";

const App = () => (
  <div className="app">
    <h2 className="title">Seattle Census Data Mapped</h2>
    <Selector />
    <div className="box">
      <Map />
    </div>
  </div>
);

export default App;
