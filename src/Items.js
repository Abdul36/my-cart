// Items.js
import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Items = (props) => {
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    console.log("Item added to cart:", item); // Log to check if the function is called
    addItem(item);
    toast.success("Item added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="col-11 col-md-6 col-lg-3">
        <div
          className="card p-0 overflow-hidden h-100 shadow"
          style={{ width: "18rem", marginBottom: "20px" }}
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
              onClick={() => handleAddToCart(props.item)}
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
