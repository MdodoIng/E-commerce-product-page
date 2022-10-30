import React, { useState } from "react";
import { Navbar, Home, ProductPrev } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [productClicked, setProductClicked] = useState("");
  const [productFullScreen, setProductFullScreen] = useState("");
  const [isCartProduct, setIsCartProduct] = useState([]);

  return (
    <Router>
      <div className="container">
        <nav className="navContainer">
          <Navbar
            isCartProduct={isCartProduct}
            setIsCartProduct={setIsCartProduct}
          />
        </nav>
        <div className="home-container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isCartProduct={isCartProduct}
                  setIsCartProduct={setIsCartProduct}
                />
              }
            />
            <Route
              path=":id"
              element={
                <ProductPrev
                  productClicked={productClicked}
                  productFullScreen={productFullScreen}
                  setProductClicked={setProductClicked}
                  setProductFullScreen={setProductFullScreen}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
