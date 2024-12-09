"use client"
import React, { useState } from "react";
import Navbar from "../../../components/navbarComponents/Navbar";
import CardList from "../../../components/cardListComponents/CardList";
import Footer from "../../../components/footerComponents/Footer";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Navbar
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
      />
      <CardList addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default App;
