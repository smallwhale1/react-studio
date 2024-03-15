import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState({});

  const calcTotal = () => {
    let acc = 0;
    Object.keys(cartItems).forEach((item) => {
      acc +=
        cartItems[item] *
        bakeryData.filter((elem) => elem.name === item)[0].price;
    });
    return acc;
  };

  const addToCart = (item) => {
    console.log(cartItems);
    const cartName = item.name;
    if (cartName in cartItems) {
      setCartItems((prev) => ({ ...prev, [cartName]: prev[cartName] + 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [cartName]: 1 }));
    }
  };

  return (
    <div className="App">
      <div>
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="bakery-items">
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem addToCart={addToCart} key={index} item={item} /> // replace with BakeryItem component
            )
          )}
        </div>
      </div>
      <div className="cart-sidebar">
        <h2>Cart</h2>
        {Object.keys(cartItems).length === 0 ? (
          <p>Nothing here just yet!</p>
        ) : (
          Object.keys(cartItems).map((elem, i) => (
            <p key={i}>
              {elem} x{cartItems[elem]}
            </p>
          ))
        )}
        <span>Total: ${calcTotal()}</span>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
