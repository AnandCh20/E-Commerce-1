import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  // Function to toggle the cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Function to show products and close the cart
  const showProducts = () => {
    setShowCart(false);
  };

  return (
    <div>
      <NavBar
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        numOfItems={cartItems.reduce((total, item) => total + item.quantity, 0)}
        toggleCart={toggleCart}
        showProducts={showProducts}
      />
      {showCart ? (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      ) : (
        <Cards addToCart={addToCart} />
      )}
    </div>
  );
};

export default App;
