import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="hero-section">
        <h1>🛒 Fresh Mart</h1>

        <h2>Fresh Groceries Delivered in Minutes</h2>

        <p>
          Vegetables • Non-Veg • Dairy Products • Daily Essentials
        </p>

        <button
          className="shop-btn"
          onClick={() => navigate('/Veg')}
        >
          Start Shopping
        </button>
      </div>

      <div className="category-section">

        <div
          className="category-card"
          onClick={() => navigate('/Veg')}
        >
          🥕 Vegetables
        </div>

        <div
          className="category-card"
          onClick={() => navigate('/NonVeg')}
        >
          🍗 Non-Veg
        </div>

        <div
          className="category-card"
          onClick={() => navigate('/DairyProducts')}
        >
          🥛 Dairy
        </div>

      </div>

    </div>
  );
}

export default Home;