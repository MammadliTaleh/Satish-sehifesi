import { useDispatch } from "react-redux";
import { addItemToCart } from "../CartSlice";
import './Card.css'

const Card = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-footer">
        <p className="card-price">${item.price.toFixed(2)}</p>
        <button
          onClick={() => dispatch(addItemToCart(item))}
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
