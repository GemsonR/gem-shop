import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Container from "./components/container/Container";
import Home from "./components/homepage/Home";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Container />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
