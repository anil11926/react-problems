import React, { useState } from 'react';
import Home from './Home';
import Veg from './Veg';
import Nonveg from './Nonveg';
import DairyProducts from './DairyProducts';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './veg.css';

function App() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <BrowserRouter>
      <header className="header">

  {/* Left Menu */}
  <div className="menu-box">
    <button className="menu-btn">
      ☰
    </button>
  </div>

  {/* Center Home */}
  <div className="home-box">
    <Link to="/Home" className="nav-card">
      🏠 Home
    </Link>
  </div>

  {/* Right Cart */}
  <div className="cart-box">
    <button className="nav-card">
      🛒 Cart ({cart.length})
    </button>
  </div>

</header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route
            path="/Veg"
            element={<Veg addToCart={addToCart} />}
          />

          <Route
            path="/NonVeg"
            element={<Nonveg addToCart={addToCart} />}
          />

          <Route
            path="/DairyProducts"
            element={<DairyProducts addToCart={addToCart} />}
          />
        </Routes>
      </main>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;