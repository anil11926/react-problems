import React from 'react';
import './Veg.css';
import { toast } from 'react-toastify';

function Veg({ addToCart }: any) {
  const vegItems = [
    {
      id: 1,
      name: 'Carrot',
      image: 'https://images.unsplash.com/photo-1447175008436-170170753a43?w=500',
      description: 'Fresh and crunchy carrots rich in Vitamin A and antioxidants.'
    },
    {
      id: 2,
      name: 'Potato',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500',
      description: 'Farm-fresh potatoes perfect for curries, fries, and snacks.'
    },
    {
      id: 3,
      name: 'Tomato',
      image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500',
      description: 'Juicy tomatoes packed with nutrients and natural flavor.'
    },
    {
      id: 4,
      name: 'Cabbage',
      image: 'https://images.unsplash.com/photo-1611105637889-3afd7295bdbf?w=500',
      description: 'Fresh green cabbage ideal for salads and healthy meals.'
    },
    {
      id: 5,
      name: 'Cauliflower',
      image: 'https://images.unsplash.com/photo-1568584711271-3f6b57a0cb16?w=500',
      description: 'Nutritious cauliflower suitable for curries and stir-fries.'
    }
  ];

  return (
    <div className="veg-container">
      <h1 className="title">🥕 Fresh Vegetables</h1>

      <div className="card-container">
        {vegItems.map((item) => (
          <div className="veg-card" key={item.id}>
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

export default Veg;