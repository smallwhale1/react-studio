// TODO: create a component that displays a single bakery item
import React from "react";

const BakeryItem = ({ item, addToCart }) => {
  return (
    <div className="bakery-item">
      <img
        className="bakery-image"
        src={`images/${item.image.split("/").slice(-1)}`}
      />
      <div className="bakery-description">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span className="price-add">
          {item.price}
          <button
            onClick={() => {
              addToCart(item);
            }}
          >
            Add to Cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default BakeryItem;
