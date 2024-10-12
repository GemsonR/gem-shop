import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import Watch from "./components/watch/Watch";
import Caps from "./components/caps/Caps";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";

function App() {
  const [notif, setNotif] = useState(0);
  const [items, setItems] = useState([]);
  const [addCart, setAddCart] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar notif={notif} />
        <Routes>
          <Route path="/gem-shop" element={<Home />} />
          <Route
            path="/gem-shop/cart"
            element={<Cart items={items} setItems={setItems} setNotif={setNotif} />}
          />
          <Route path="/gem-shop/about" element={<About />} />
          <Route
            path="/gem-shop/watches"
            element={
              <Watch
                setItems={setItems}
                setNotif={setNotif}
                setAddCart={setAddCart}
                addCart={addCart}
              />
            }
          />
          <Route
            path="/gem-shop/caps"
            element={
              <Caps
                setItem={setItems}
                setNotif={setNotif}
                setAddCart={setAddCart}
                addCart={addCart}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
