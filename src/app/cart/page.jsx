"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./CartPage.css";
import { useState,useEffect } from "react";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Məlumatın Yüklənməsində Problem Yaşandı");
        }
        const data = await response.json();
        setCartItems(data);
        setProducts(data.slice(0, 20)); // Limit to 20 products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  // Toplam qiyməti hesabla
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Səbət</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Səbətiniz boşdur.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Qiymət: ${item.price.toFixed(2)}</p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(index)} // Remove item from cart
                  >
                    Çıxar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Toplam: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}

      <button className="back-to-shop" onClick={() => router.push("/home")}>
        Alışverişə davam et
      </button>
    </div>
  );
};

export default CartPage;