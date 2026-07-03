import React from 'react';
import './DairyProducts.css';
import { toast } from 'react-toastify';

function DairyProducts({ addToCart }: any) {
  const dairyItems = [
    {
      id: 1,
      name: 'Milk',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
      description: 'Fresh and pure cow milk rich in calcium and protein.'
    },
    {
      id: 2,
      name: 'Curd',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500',
      description: 'Healthy and creamy curd perfect for daily nutrition.'
    },
    {
      id: 3,
      name: 'Butter',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500',
      description: 'Rich and creamy butter ideal for bread and cooking.'
    },
    {
      id: 4,
      name: 'Cheese',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500',
      description: 'Delicious cheese packed with protein and calcium.'
    },
    {
      id: 5,
      name: 'Paneer',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500',
      description: 'Fresh homemade paneer perfect for curries and snacks.'
    }
  ];

  return (
    <div className="dairy-container">
      <h1 className="title">🥛 Dairy Products</h1>

      <div className="card-container">
        {dairyItems.map((item) => (
          <div className="dairy-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="card-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
        <button
          className="cart-btn"
         onClick={() => {
          addToCart(item);
      toast.success(`${item.name} added to cart successfully!`);
          }}
>
           🛒 Add to Cart
         </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DairyProducts;