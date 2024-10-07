import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import Watch from "./components/watch/Watch";
import watches from "./components/watch/WatchContainer";
import { useState } from "react";
import Caps from "./components/caps/Caps";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/gem-shop" element={<Home />} />
          <Route path="/gem-shop/watches" element={<Watch />} />
          <Route path="/gem-shop/caps" element={<Caps />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
