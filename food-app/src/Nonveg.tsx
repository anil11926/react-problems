import React from "react";
import "./NonVeg.css";
import { toast } from 'react-toastify';

const nonVegItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d29a?w=500",
    description:
      "Aromatic basmati rice cooked with spicy chicken and traditional Indian spices.",
  },
  {
    id: 2,
    name: "Butter Chicken",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
    description:
      "Creamy tomato-based curry with tender chicken pieces.",
  },
  {
    id: 3,
    name: "Grilled Fish",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500",
    description:
      "Fresh fish marinated with herbs and grilled to perfection.",
  },
  {
    id: 4,
    name: "Chicken Curry",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
    description:
      "Traditional chicken curry prepared with rich Indian spices.",
  },
  {
    id: 5,
    name: "Egg Masala",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    description:
      "Boiled eggs cooked in a spicy and flavorful masala gravy.",
  },
];

function NonVeg({ addToCart }: any) {
  return (
    <div className="nonveg-container">
      <h1 className="title">🍗 Non-Vegetarian Menu</h1>

      <div className="card-container">
        {nonVegItems.map((item) => (
          <div className="food-card" key={item.id}>
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

export default NonVeg;