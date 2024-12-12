"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../cartSlice";
import { useRouter } from "next/navigation";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRemove = (item) => {
    dispatch(removeItemFromCart(item));
  };
  

  const handleContinueShopping = () => {
    router.push("/home");
  };

  return (
    <div className="cart-container">
      <h1>Səbət</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Səbətiniz boşdur</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">${item.price}</p>
              </div>
              <button onClick={() => handleRemove(item)}>Çıxar</button>
            </li>
          ))}
        </ul>
      )}
      <button className="continue-shopping" onClick={handleContinueShopping}>
        Alışverişə davam et
      </button>
    </div>
  );
};
export default CartPage;
