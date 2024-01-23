import "./App.css";
import { render } from "react-dom";
import CarFilter from "./CarFilter";
import { useState } from "react";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>ABOUBA-CAR</h1>
      </div>
      <Home />
    </div>
  );
}
