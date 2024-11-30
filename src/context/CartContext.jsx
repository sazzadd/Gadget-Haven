// src/context/CartContext.js
import React, { createContext, useState } from "react";

// Create Cart Context
export const CartContext = createContext();

// Cart Provider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
