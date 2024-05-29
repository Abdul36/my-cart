// Item.js
import React from "react";
import { useCart } from "react-use-cart";

const Items = (props) => {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-11 col-md-6 col-lg-3">
        <div
          className="card p-0 overflow-hidden h-100 shadow"
          style={{ width: "18rem", marginBottom: "20px" }} // Added margin bottom
        >
          <img
            src={props.img}
            className="card-img-top img-fluid"
            alt="product"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-title">Rs {props.price}</h5>
            <p className="card-text">{props.desc}</p>
            <button
              className="btn btn-primary"
              onClick={() => addItem(props.item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
