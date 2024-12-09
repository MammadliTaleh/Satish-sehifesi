"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addItemToCart } from "../../src/app/cartSlice";
import "./Card.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const router = useRouter(); 

  const changeProduct = () => {
    router.push(`/product/${item.id}`); 
  };

  return (
    <div className="card" onClick={changeProduct}>
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-footer">
          <p className="card-price">${item.price.toFixed(2)}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Event yayılmasının qarşısını alın
              dispatch(addItemToCart(item));
            }}
            className="card-button"
          >
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
