"use client";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../cartSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "./ProductPage.css";

export default function ItemPage({ params }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const id = params.id;

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setItem(data))
        .catch((err) => console.error("Error fetching item:", err));
    }
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="item-page">
      <div className="item-image-container">
        <img src={item.image} alt={item.title} className="item-image" />
      </div>
      <div className="item-details">
        <h1 className="item-title">{item.title}</h1>
        <p className="item-description">{item.description}</p>
        <p className="item-price">Price: ${item.price.toFixed(2)}</p>
        <button
          onClick={() => dispatch(addItemToCart(item))} // Səbətə əlavə edirik
          className="item-add-button"
        >
          Əlavə et
        </button>
        <button
          onClick={() => router.push("/cart")}
          className="item-add-button cart-button"
        >
          Səbətə Keç
        </button>
      </div>
    </div>
  );
}
